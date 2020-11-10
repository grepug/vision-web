import * as React from "react";
import { Button, Dropdown, Space, Row, Col } from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { useContext } from "./Context";

export function OKRTableActionRow() {
  const ctx = useContext()!;

  return (
    <Row justify="space-between">
      <Col>
        <Space style={{ width: "100%" }}>
          <Dropdown overlay={ctx.addKeyResultMenu}>
            <Button icon={<PlusOutlined />} type="primary">
              Add Key Result
            </Button>
          </Dropdown>
          <Button
            icon={<DownloadOutlined />}
            onClick={() => ctx.setImportModalVisible(true)}
          >
            Import
          </Button>
        </Space>
      </Col>
      <Col>
        <Button
          icon={<UploadOutlined />}
          onClick={() => ctx.setExportModalVisible(true)}
        >
          Export
        </Button>
      </Col>
    </Row>
  );
}
