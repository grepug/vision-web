import { Button, List, Popconfirm, Progress, Space, Typography } from "antd";
import { useContext } from "./Contexts/CycleContext";
import moment from "moment";
import { DeleteOutlined } from "@ant-design/icons";

export function CycleList() {
  const ctx = useContext()!;

  function handleSwitchCycle(i: number) {
    ctx.switchCycle(i);

    ctx.setCyclesModalVisible(false);
  }

  return (
    <div>
      <List
        dataSource={ctx.okr.current.cycles}
        renderItem={(item, i) => (
          <List.Item
            extra={
              <Space size="large">
                <Progress
                  percent={item.score * 100}
                  type="circle"
                  size="small"
                />
                <Space>
                  <Button
                    onClick={() => handleSwitchCycle(i)}
                    disabled={item.id === ctx.curCycle.current?.id}
                  >
                    {item.id === ctx.curCycle.current?.id
                      ? "Current"
                      : "Switch"}
                  </Button>
                  <Popconfirm
                    title="Sure to delete?"
                    onConfirm={() => ctx.deleteCycle(item.id, i)}
                  >
                    <Button icon={<DeleteOutlined />} type="link" />
                  </Popconfirm>
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
                      from: {formatDate(item.startAt)} to:{" "}
                      {formatDate(item.endAt)}
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

function formatDate(date: moment.Moment) {
  return date.format("YYYY/MM/DD");
}
