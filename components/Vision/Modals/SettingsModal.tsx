import * as React from "react";
import { Modal, Input, Typography, message, Button, Divider } from "antd";
import { useContext } from "../Contexts/CycleContext";
import { OKR } from "../models/OKR";
import { TextAlignRight } from "../Styles/TextAlignRight";
import { VerticalSpace } from "../Styles/VerticalSpace";

export function SettingsModal() {
  const ctx = useContext()!;
  const [importedValue, setImportedValue] = React.useState<string>();

  function handleCopy() {
    function copy() {
      var copyText = document.querySelector<HTMLInputElement>("#copy-input");
      copyText?.select();

      return document.execCommand("copy");
    }

    copy();

    message.success("copied!");
  }

  function handleImport() {
    try {
      if (importedValue) {
        ctx.okr.current = OKR.fromJSONString(importedValue);
        ctx.forceRender();
      }
    } catch {
      message.error("Invalid Imported JSON!");
    }
  }

  function handleCancel() {
    ctx.setSettingsModalVisible(false);
  }

  return (
    <Modal
      visible={ctx.settingsModalVisible}
      width="800px"
      title="Settings"
      onCancel={handleCancel}
      footer={null}
    >
      <Typography.Title level={3}>Import</Typography.Title>
      <VerticalSpace />
      <Input.TextArea
        id="copy-import"
        onChange={(e) => setImportedValue(e.target.value)}
      />
      <VerticalSpace />
      <TextAlignRight>
        <Button onClick={handleImport}>Restore</Button>
      </TextAlignRight>
      <Divider />
      <Typography.Title level={3}>Export</Typography.Title>
      <VerticalSpace />
      <Input.TextArea
        id="copy-input"
        value={ctx.okr.current.toJSONString(undefined)}
      />
      <VerticalSpace />
      <TextAlignRight>
        <Button onClick={handleCopy}>Copy</Button>
      </TextAlignRight>
    </Modal>
  );
}
