import * as React from "react";
import { Input, Modal, message } from "antd";
import { useContext } from "../Contexts/CycleContext";

export function ExportModal() {
  const ctx = useContext()!;

  function handleCopy() {
    function copy() {
      var copyText = document.querySelector<HTMLInputElement>("#copy-input");
      copyText?.select();

      return document.execCommand("copy");
    }

    copy();

    message.success("copied!");

    handleCancel();
  }

  function handleCancel() {
    ctx.setExportModalVisible(false);
  }

  return (
    <Modal
      title="Export"
      width="1100px"
      visible={ctx.exportModalVisible}
      onOk={handleCopy}
      okText="Copy"
      onCancel={handleCancel}
    >
      <Input.TextArea
        id="copy-input"
        value={ctx.curCycle.toJSONString()}
        style={{ height: 300 }}
      />
    </Modal>
  );
}
