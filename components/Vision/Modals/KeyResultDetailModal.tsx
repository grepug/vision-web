import { Divider, Input, Modal, Typography, Form } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { KeyResult } from "../models/KeyResult";
import { useContext } from "../Context";

export function KeyResultsDetailModal() {
  const ctx = useContext()!;
  const [form] = Form.useForm();

  const keyResult = ctx.keyResults[ctx.curKeyResultDetailIndex.current] as
    | KeyResult
    | undefined;

  console.log(ctx.curKeyResultDetailIndex.current, keyResult?.remark);

  function handleCancel() {
    ctx.setKeyResultModalVisible(false);
  }

  async function handleSave() {
    const values = await form.validateFields();

    ctx.setKeyResults((krs) => {
      krs[ctx.curKeyResultDetailIndex.current].remark = values.remark;

      return krs;
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
      width="800px"
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
