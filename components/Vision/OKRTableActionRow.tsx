import * as React from "react";
import { Button, Dropdown, Space, Row, Col, Menu, Switch, Divider } from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { useContext } from "./Context";

export function OKRTableActionRow() {
  const ctx = useContext()!;

  const addKeyResultMenu = (
    <Menu>
      <Menu.ItemGroup title="Objectives">
        {ctx.objectives.map((el) => (
          <Menu.Item key={el.id} onClick={() => ctx.handleAddKR(el)}>
            {el.title}
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <Row justify="space-between">
      <Col>
        <Space style={{ width: "100%" }}>
          <Button
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => ctx.handleAddKR()}
          >
            Add Objective
          </Button>
          {!!ctx.keyResults.length && (
            <Dropdown overlay={addKeyResultMenu}>
              <Button icon={<PlusOutlined />}>Add Key Result</Button>
            </Dropdown>
          )}
        </Space>
      </Col>
      <Col>
        <Space split={<Divider type="vertical" />}>
          <Space>
            <div>Persisted</div>
            <Switch />
          </Space>
          <Space>
            <Button
              icon={<DownloadOutlined />}
              onClick={() => ctx.setImportModalVisible(true)}
            >
              Import
            </Button>
            <Button
              icon={<UploadOutlined />}
              onClick={() => ctx.setExportModalVisible(true)}
            >
              Export
            </Button>
          </Space>
        </Space>
      </Col>
    </Row>
  );
}
