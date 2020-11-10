import { Button, Col, Divider, Modal, Row, Typography } from "antd";
import { useContext } from "../Contexts/CycleContext";
import { CycleList } from "../CycleList";

export function CycleListModal() {
  const ctx = useContext()!;

  function handleCancel() {
    ctx.setCyclesModalVisible(false);
  }

  return (
    <Modal
      width="1100px"
      visible={ctx.cyclesModalVisible}
      title="Cycle List"
      onCancel={handleCancel}
      footer={null}
    >
      <Row justify="space-between">
        <Col>
          <Typography.Title level={2}>My Cycles</Typography.Title>
        </Col>
        <Col>
          <Button onClick={ctx.createCycle}>Add Cycle</Button>
        </Col>
      </Row>
      <Divider />
      <CycleList />
    </Modal>
  );
}
