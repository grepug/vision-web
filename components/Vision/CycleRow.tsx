import { Typography, DatePicker, Form, Row, Col, Button, Space } from "antd";
import { useContext } from "./Context";
import moment from "moment";
import { CycleListModal } from "./Modals/CycleListModal";
import { VerticalSpace } from "./VerticalSpace";
import { SettingOutlined } from "@ant-design/icons";

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
      <CycleListModal />
      <Typography.Title level={3}>My Cycle</Typography.Title>
      <VerticalSpace />
      <Row justify="space-between">
        <Col>
          <Form form={form}>
            <Form.Item label="Range">
              <RangePicker onChange={handleSave as any} />
            </Form.Item>
          </Form>
        </Col>
        <Col>
          <Space>
            <Button onClick={() => ctx.setCyclesModalVisible(true)}>
              View All Cycles
            </Button>
            <Button
              icon={<SettingOutlined />}
              onClick={() => ctx.setCyclesModalVisible(true)}
            >
              Settings
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
