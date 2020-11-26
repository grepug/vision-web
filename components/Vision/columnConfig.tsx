import { KeyResult } from "./models/KeyResult";
import { Space, Button, Popconfirm, Popover } from "antd";
import {
  DeleteOutlined,
  MoreOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { WrapParagraph } from "./Styles/WrapParagraph";

export const getColumnConfig = (props: {
  handleDelete: (kr: KeyResult) => void;
  onKeyResultEditClick: (kr: KeyResult, type: "remark" | "records") => void;
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
        row.objective.keyResults[0],
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
    width: "5%",
    render: (value: string, row: KeyResult) => {
      const obj: any = {
        children: `${value}%`,
        props: {},
      };

      const isFirstKeyResultOfObjective = row.isEqual(
        row.objective.keyResults[0],
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
    width: "25%",
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
    width: "5%",
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
    width: "5%",
  },
  {
    title: "Current Quantity",
    dataIndex: "current",
    width: "5%",
  },
  {
    title: "Score Per Quantity",
    dataIndex: "scorePerQuantity",
    width: "5%",
  },
  {
    title: "Score",
    dataIndex: "scoreString",
    width: "5%",
  },
  {
    title: "Operation",
    dataIndex: "operation",
    render: (_, record: KeyResult, index: number) => (
      <Space>
        <Button
          icon={<ProfileOutlined />}
          type="text"
          onClick={() => props.onKeyResultEditClick(record, "records")}
        />
        <Button
          icon={<MoreOutlined />}
          type="text"
          onClick={() => props.onKeyResultEditClick(record, "remark")}
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
    ),
  },
];
