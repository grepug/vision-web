import { Typography, DatePicker, Form, Row, Col, Button, Space } from "antd";
import { useContext } from "./Contexts/CycleContext";
import moment from "moment";
import { CycleListModal } from "./Modals/CycleListModal";
import { VerticalSpace } from "./VerticalSpace";
import { SettingOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

export function CycleRow() {
  const ctx = useContext()!;

  return (
    <div>
      <CycleListModal />
      <Row justify="space-between">
        <Col>
          <Typography.Title level={3}>My Cycle</Typography.Title>
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
      <VerticalSpace />
    </div>
  );
}
