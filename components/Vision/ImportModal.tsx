import * as React from "react";
import { Input, Modal, message, Divider, Button } from "antd";

export function ImportModal(props: {
  visible: boolean;
  onCancel: () => void;
  onChange: (value: string) => void;
}) {
  const [value, setValue] = React.useState("");

  function handleOK() {
    props.onChange(value);
    props.onCancel();
  }

  return (
    <Modal
      title="Export"
      width="800px"
      visible={props.visible}
      onCancel={props.onCancel}
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
