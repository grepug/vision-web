import { Divider, Input, Modal, Typography, Form } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { useContext } from "../Contexts/CycleContext";

export function KeyResultsDetailModal() {
  const ctx = useContext()!;
  const [form] = Form.useForm();

  const keyResult = ctx.curKeyResult.current;

  function handleCancel() {
    ctx.setKeyResultModalVisible(false);
  }

  async function handleSave() {
    const values = await form.validateFields();

    ctx.mutateCycle((cycle) => {
      if (keyResult) {
        keyResult.remark = values.remark;
      }

      return cycle;
    });

    ctx.forceRender();

    handleCancel();
  }

  if (!keyResult) {
    return null;
  }

  return (
    <Modal
      visible={ctx.keyResultModalVisible}
      width="1100px"
      onCancel={handleCancel}
      title="Key Result Detail"
      onOk={handleSave}
      destroyOnClose
    >
      <Typography.Title level={2}>{keyResult.title}</Typography.Title>
      <Divider />
      <Form form={form} initialValues={keyResult}>
        <FormItem name="remark" label="Remark">
          <Input.TextArea autoSize={{ minRows: 5, maxRows: 12 }} />
        </FormItem>
      </Form>
    </Modal>
  );
}
