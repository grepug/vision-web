import { Button, List, Progress, Space, Typography } from "antd";
import { useContext } from "./Contexts/CycleContext";
import { formatDate } from "./utils";
import { DeleteButton } from "./DeleteButton";

export function CycleList() {
  const ctx = useContext()!;

  function handleSwitchCycle(i: number) {
    ctx.switchCycle(i);

    ctx.setCyclesModalVisible(false);
  }

  return (
    <div>
      <List
        dataSource={ctx.cycleObjects}
        renderItem={(item, i) => (
          <List.Item
            extra={
              <Space size="large">
                <Progress
                  type="circle"
                  size="small"
                  percent={item.score * 100}
                  format={(percent) => `${percent!.toFixed(2)}%`}
                />

                <Space>
                  <Button
                    onClick={() => handleSwitchCycle(i)}
                    disabled={item.id === ctx.curCycleId}
                  >
                    {item.id === ctx.curCycleId ? "Current" : "Switch"}
                  </Button>
                  <DeleteButton onConfirm={() => ctx.deleteCycle(item.id, i)} />
                </Space>
              </Space>
            }
          >
            <List.Item.Meta
              title={
                <div>
                  <Typography.Title level={3}>{item.title}</Typography.Title>
                  <Space direction="vertical">
                    <div>
                      from: {formatDate(item.startAtMoment)} to:{" "}
                      {formatDate(item.endAtMoment)}
                    </div>
                    <div>
                      <Space>
                        <Typography.Text>
                          Objectives: {item.objectives.length}
                        </Typography.Text>
                        <Typography.Text>
                          KeyResults: {item.keyResultCount}
                        </Typography.Text>
                      </Space>
                    </div>
                  </Space>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}
