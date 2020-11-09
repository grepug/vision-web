import * as React from "react";
import {
  Input,
  Divider,
  Table,
  Form,
  Popconfirm,
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
  DeleteOutlined,
} from "@ant-design/icons";

const EditableContext = React.createContext<any>(undefined);

const initialObjective = new Objective();

export function Vision() {
  const [kRs, setKRs] = React.useState<KeyResult[]>([]);
  const [key, setKey] = React.useState(0);
  const [exportModalVisible, setExportModalVisible] = React.useState(false);
  const [importModalVisible, setImportModalVisible] = React.useState(false);

  function forceRender() {
    setTimeout(() => {
      setKey((s) => s + 1);
    }, 0);
  }

  const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = React.useState(false);
    const inputRef = React.useRef(null);
    const form = React.useContext(EditableContext);

    React.useEffect(() => {
      if (editing) {
        // @ts-ignore
        inputRef.current.focus();
      }
    }, [editing]);

    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    };

    const save = async (e) => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({ ...record, ...values });
      } catch (errInfo) {
        console.log("Save failed:", errInfo);
      }
    };

    let childNode = children;

    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Input ref={inputRef as any} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }

    return <td {...restProps}>{childNode}</td>;
  };

  const columnConfig = [
    {
      title: "Objectives",
      dataIndex: ["objective", "title"],
      editable: true,
      render: (value: string, row: KeyResult) => {
        const obj: any = {
          children: value,
          props: {},
        };

        const isFirstKeyResultOfObjective = row.isEqual(
          row.objective.keyResults[0]
        );
        const krLength = row.objective.keyResults.length;
        obj.props.rowSpan = isFirstKeyResultOfObjective ? krLength : 0;

        return obj;
      },
    },
    {
      title: "Objective Weight",
      dataIndex: ["objective", "weight"],
      editable: true,
      render: (value: string, row: KeyResult) => {
        const obj: any = {
          children: `${value}%`,
          props: {},
        };

        const isFirstKeyResultOfObjective = row.isEqual(
          row.objective.keyResults[0]
        );
        const krLength = row.objective.keyResults.length;
        obj.props.rowSpan = isFirstKeyResultOfObjective ? krLength : 0;

        return obj;
      },
    },
    {
      title: "Key Results",
      dataIndex: "title",
      key: "id",
      editable: true,
    },
    {
      title: "Weight",
      dataIndex: "weight",
      editable: true,
      render: (text) => `${text}%`,
    },
    {
      title: "Unit",
      dataIndex: "unit",
      editable: true,
    },
    {
      title: "Total Quantity",
      dataIndex: "total",
      editable: true,
    },
    {
      title: "Current Quantity",
      dataIndex: "current",
      editable: true,
    },
    {
      title: "Score",
      dataIndex: "score",
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record: KeyResult) =>
        kRs.length >= 1 ? (
          <Space>
            <Button icon={<PlusOutlined />} type="text" />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                handleDelete(record);
              }}
            >
              <Button icon={<DeleteOutlined />} type="text" />
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  const columns: ColumnsType = columnConfig.map((col) => {
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
    setKRs((krs) => {
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
    setKRs((krs) => {
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

    setKRs((krs) => {
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
    kRs.map((el) => el.objective),
    "id"
  );

  console.log(kRs);

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

      setKRs(keyResults);

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
        dataSource={kRs}
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

function uniq<T>(arr: T[], keyName: keyof T) {
  let newArr: T[] = [];

  for (const el of arr) {
    const isIn = newArr.some((el2) => el2[keyName] === el[keyName]);
    if (!isIn) {
      newArr.push(el);
    }
  }

  return newArr;
}

function findLastIndex<T>(arr: T[], predicate: (obj: T) => boolean) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    const isEqual = predicate(el);
    const isNextEqual = arr[i + 1] ? predicate(arr[i + 1]) : false;

    if (isEqual && !isNextEqual) {
      index = i;
      break;
    }
  }

  return index;
}
