import { Typography, DatePicker, Form } from "antd";
import { useContext } from "./Context";
import moment from "moment";

const { RangePicker } = DatePicker;

export function CycleRow() {
  const ctx = useContext()!;
  const [form] = Form.useForm();

  function handleSave([start, end]: moment.Moment[]) {
    ctx.mutateCycle((cycle) => {
      cycle.startAtString = start.toISOString();
      cycle.endAtString = end.toISOString();

      return cycle;
    });
  }

  return (
    <div>
      <Typography.Title level={3}>Cycle</Typography.Title>
      <Form form={form}>
        <Form.Item label="Range">
          <RangePicker onChange={handleSave as any} />
        </Form.Item>
      </Form>
    </div>
  );
}
