import * as React from "react";
import {
  Divider,
  Table,
  Button,
  Dropdown,
  Menu,
  message,
  Space,
  Row,
  Col,
} from "antd";
import { Objective } from "./Objective";
import { KeyResult } from "./KeyResult";
import type { ColumnsType } from "antd/lib/table/interface";
import { ExportModal } from "./ExportModal";
import { ImportModal } from "./ImportModal";
import {
  PlusCircleOutlined,
  UploadOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { EditableCell } from "./EditableCell";
import { EditableRow } from "./EditableRow";
import { findLastIndex, uniq } from "./utils";
import { getColumnConfig } from "./columnConfig";

const initialObjective = new Objective();

export function Vision() {
  const [keyResults, setKeyResults] = React.useState<KeyResult[]>([]);
  const [key, setKey] = React.useState(0);
  const [exportModalVisible, setExportModalVisible] = React.useState(false);
  const [importModalVisible, setImportModalVisible] = React.useState(false);

  function forceRender() {
    setTimeout(() => setKey((s) => s + 1), 0);
  }

  const columns: ColumnsType = getColumnConfig({
    handleDelete,
    keyResults,
  }).map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleEdit,
      }),
    };
  });

  function handleDelete(keyResult: KeyResult) {
    setKeyResults((krs) => {
      const index = krs.findIndex((el) => el.isEqual(keyResult));

      krs[index].objective.keyResults = krs[index].objective.keyResults.filter(
        (el) => !el.isEqual(krs[index])
      );

      krs.splice(index, 1);

      return krs;
    });

    forceRender();
  }

  function handleEdit(keyResult: KeyResult) {
    setKeyResults((krs) => {
      const index = krs.findIndex((el) => el.isEqual(keyResult));
      krs[index].overrideProps(keyResult);

      return krs;
    });

    forceRender();
  }

  function handleAddKR(objective?: Objective) {
    const isExistedObjective = objective != null;

    if (!isExistedObjective) {
      objective = objectives.length ? new Objective() : initialObjective;
    }

    const keyResult = new KeyResult();
    keyResult.objective = objective!;
    objective!.linkKeyResults(keyResult);

    setKeyResults((krs) => {
      let insertIndex = krs.length;

      if (isExistedObjective) {
        insertIndex =
          findLastIndex(krs, (el) => el.objective.isEqual(objective)) + 1;
      }

      krs.splice(insertIndex, 0, keyResult);

      return krs;
    });

    forceRender();
  }

  const objectives = uniq(
    keyResults.map((el) => el.objective),
    "id"
  );

  console.log(keyResults);

  const addKeyResultMenu = (
    <Menu>
      <Menu.Item icon={<PlusCircleOutlined />} onClick={() => handleAddKR()}>
        Create New Objective
      </Menu.Item>
      <Menu.ItemGroup title="Objectives">
        {objectives.map((el) => (
          <Menu.Item key={el.id} onClick={() => handleAddKR(el)}>
            {el.title}
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  function handleExportChange(value: string) {
    const objectives = Objective.arrFromJSON(value);

    if (objectives) {
      const keyResults = Objective.arrToKeyResultArr(objectives);

      setKeyResults(keyResults);

      forceRender();

      return;
    }

    message.error("Your JSON string is invalid!");
  }

  return (
    <div style={{ paddingBottom: 200 }}>
      <ExportModal
        visible={exportModalVisible}
        jsonValue={Objective.arrToJSON(objectives)}
        onCancel={() => setExportModalVisible(false)}
      />
      <ImportModal
        visible={importModalVisible}
        onCancel={() => setImportModalVisible(false)}
        onChange={handleExportChange}
      />
      <Row justify="space-between">
        <Col>
          <Space style={{ width: "100%" }}>
            <Dropdown overlay={addKeyResultMenu}>
              <Button icon={<PlusOutlined />} type="primary">
                Add Key Result
              </Button>
            </Dropdown>
            <Button
              icon={<DownloadOutlined />}
              onClick={() => setImportModalVisible(true)}
            >
              Import
            </Button>
          </Space>
        </Col>
        <Col>
          <Button
            icon={<UploadOutlined />}
            onClick={() => setExportModalVisible(true)}
          >
            Export
          </Button>
        </Col>
      </Row>
      <Divider />
      <Table
        key={key}
        dataSource={keyResults}
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        columns={columns}
        pagination={false}
        rowKey={(el: KeyResult) => el.id}
      />
    </div>
  );
}
