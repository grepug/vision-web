import {
  Modal,
  List,
  Typography,
  Form,
  Divider,
  InputNumber,
  Input,
  Button,
} from "antd";
import { useContext } from "../Contexts/CycleContext";
import { DeleteButton } from "../DeleteButton";

export function RecordModal() {
  const ctx = useContext()!;
  const [form] = Form.useForm();

  function handleCancel() {
    ctx.setRecordsModalVisible(false);
  }

  async function handleAdd() {
    const value = await form.validateFields();

    const keyResult = ctx.curKeyResult.current;

    if (keyResult) {
      ctx.handleAddRecord(value, keyResult);
      form.resetFields();
    }
  }

  function handleDelete(index: number) {
    ctx.handleDeleteRecord(ctx.curKeyResult.current!, index);
  }

  const keyResult = ctx.curKeyResult.current;

  if (!keyResult) {
    return null;
  }

  return (
    <Modal
      width="800px"
      visible={ctx.recordsModalVisible}
      title="Records"
      onCancel={handleCancel}
      footer={null}
    >
      <Typography.Title level={3}>Add Record</Typography.Title>
      <Form form={form}>
        <Form.Item label="Quantity" required name="quantity">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Remark" name="remark">
          <Input.TextArea autoSize={{ minRows: 3, maxRows: 12 }} />
        </Form.Item>
        <div style={{ textAlign: "right" }}>
          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
        </div>
      </Form>
      <Divider />
      <Typography.Title level={3}>Records</Typography.Title>
      <List
        dataSource={keyResult.records}
        renderItem={(item, i) => (
          <List.Item extra={<DeleteButton onConfirm={() => handleDelete(i)} />}>
            <List.Item.Meta
              avatar={i + 1}
              title={item.remark}
              description={
                <div>
                  <div>Created At: {item.formattedRecordDate}</div>
                  <div>Quantity: {item.quantity}</div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Modal>
  );
}
