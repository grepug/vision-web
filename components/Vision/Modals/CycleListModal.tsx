import { Modal, Typography } from "antd";
import { useContext } from "../Context";

export function CycleListModal() {
  const ctx = useContext()!;

  function handleCancel() {
    ctx.setCyclesModalVisible(false);
  }

  return (
    <Modal
      width="800px"
      visible={ctx.cyclesModalVisible}
      title="Cycle List"
      onCancel={handleCancel}
    >
      <Typography.Title level={2}>My Cycles</Typography.Title>
    </Modal>
  );
}
