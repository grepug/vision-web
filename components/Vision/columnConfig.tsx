import { KeyResult } from "./models/KeyResult";
import { Space, Button, Popconfirm, Popover } from "antd";
import { DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import { WrapParagraph } from "./WrapParagraph";
import { Key } from "readline";

export const getColumnConfig = (props: {
  keyResults: KeyResult[];
  handleDelete: (kr: KeyResult) => void;
  onKeyResultEditClick: (index: number) => void;
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
    render: (text: string, record: KeyResult) => {
      return (
        <Popover
          placement="right"
          title="Remark"
          content={<WrapParagraph text={record.remark} />}
        >
          {text}
        </Popover>
      );
    },
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
    render: (_, record: KeyResult, index: number) =>
      props.keyResults.length >= 1 ? (
        <Space>
          <Button
            icon={<MoreOutlined />}
            type="text"
            onClick={() => props.onKeyResultEditClick(index)}
          />
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
