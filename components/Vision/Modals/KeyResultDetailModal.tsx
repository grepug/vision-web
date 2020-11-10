import { Divider, Input, Modal, Typography } from "antd";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import { KeyResult } from "../models/KeyResult";

export function KeyResultsDetailModal(props: {
  visible: boolean;
  onCancel: () => void;
  keyResult: KeyResult;
}) {
  return (
    <Modal visible={props.visible} title="Key Result Detail">
      <Typography.Title level={2}>{props.keyResult.title}</Typography.Title>
      <Divider />
      <Form>
        <FormItem label="Remark">
          <Input.TextArea style={{ height: 300 }} />
        </FormItem>
      </Form>
    </Modal>
  );
}
