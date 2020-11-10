import * as React from "react";
import { Input, Modal } from "antd";
import { useContext } from "../Context";

export function ImportModal() {
  const ctx = useContext()!;

  const [value, setValue] = React.useState("");

  function handleOK() {
    ctx.handleExportChange(value);
    handleCancel();
  }

  function handleCancel() {
    ctx.curKeyResultDetailIndex.current = -1;
    ctx.setImportModalVisible(false);
  }

  return (
    <Modal
      title="Export"
      width="800px"
      visible={ctx.importModalVisible}
      onCancel={handleCancel}
      onOk={handleOK}
    >
      <Input.TextArea
        id="copy-import"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ height: 300 }}
      />
    </Modal>
  );
}
