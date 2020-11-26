import * as React from "react";
import {
  Button,
  Dropdown,
  Space,
  Row,
  Col,
  Menu,
  Progress,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useContext } from "./Contexts/CycleContext";

const { RangePicker } = DatePicker;

export function OKRTableActionRow() {
  const ctx = useContext()!;

  function handleSave(value: moment.Moment[] | undefined) {
    ctx.mutateCycle((cycle) => {
      if (value) {
        const [start, end] = value;

        cycle.startAt = start.format("YYYY-MM-DDTHH:mm:ssZ");
        cycle.endAt = end.format("YYYY-MM-DDTHH:mm:ssZ");
      }

      return cycle;
    });
  }

  const cycle = ctx.curCycle.current;

  if (!cycle) {
    return null;
  }

  const range = [cycle.startAtMoment, cycle.endAtMoment];

  const addKeyResultMenu = (
    <Menu>
      <Menu.ItemGroup title="Objectives">
        {cycle.objectives.map((el) => (
          <Menu.Item key={el.id} onClick={() => ctx.handleAddKR(el)}>
            {el.title}
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <Row justify="space-between" align="bottom">
      <Col>
        <Space style={{ width: "100%" }}>
          <Button
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => ctx.handleAddKR()}
          >
            Add Objective
          </Button>
          {!!cycle.renderingKeyResults.length && (
            <Dropdown overlay={addKeyResultMenu}>
              <Button icon={<PlusOutlined />}>Add Key Result</Button>
            </Dropdown>
          )}
          <RangePicker value={range as any} onChange={handleSave as any} />
          <div>
            Days Left: {cycle.daysLeft} / {cycle.totaldays}
          </div>
        </Space>
      </Col>
      <Col>
        <Progress
          type="circle"
          percent={cycle.score * 100}
          format={(percent) => `${percent!.toFixed(2)}%`}
          width={100}
          trailColor="#ccc"
        />
      </Col>
    </Row>
  );
}
