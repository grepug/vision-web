import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export function DeleteButton(props: { onConfirm: () => void }) {
  return (
    <Popconfirm title="Sure to delete?" onConfirm={props.onConfirm}>
      <Button icon={<DeleteOutlined />} type="link" />
    </Popconfirm>
  );
}
