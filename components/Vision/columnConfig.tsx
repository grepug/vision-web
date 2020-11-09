import { KeyResult } from "./KeyResult";
import { Space, Button, Popconfirm } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

export const getColumnConfig = (props: {
  keyResults: KeyResult[];
  handleDelete: (kr: KeyResult) => void;
}) => [
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
      props.keyResults.length >= 1 ? (
        <Space>
          <Button icon={<PlusOutlined />} type="text" />
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              props.handleDelete(record);
            }}
          >
            <Button icon={<DeleteOutlined />} type="text" />
          </Popconfirm>
        </Space>
      ) : null,
  },
];
