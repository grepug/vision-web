import * as React from "react";
import { Input, Modal, message, Divider, Button } from "antd";

export function ExportModal(props: {
  visible: boolean;
  jsonValue: string;
  onCancel: () => void;
}) {
  function handleCopy() {
    function copy() {
      var copyText = document.querySelector<HTMLInputElement>("#copy-input");
      copyText?.select();

      return document.execCommand("copy");
    }

    copy();

    message.success("copied!");

    props.onCancel();
  }

  return (
    <Modal
      title="Export"
      width="800px"
      visible={props.visible}
      onOk={handleCopy}
      okText="Copy"
      onCancel={props.onCancel}
    >
      <Input.TextArea
        id="copy-input"
        value={props.jsonValue}
        style={{ height: 300 }}
      />
    </Modal>
  );
}
