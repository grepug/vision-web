import * as React from "react";
import { Table } from "antd";
import { KeyResult } from "./models/KeyResult";
import { getEditableCell } from "./EditableCell";
import { EditableRow } from "./EditableRow";
import { useContext } from "./Context";

export function OKRTable() {
  const ctx = useContext()!;

  return (
    <Table
      key={ctx.key}
      dataSource={ctx.cycle.renderingKeyResults}
      components={{
        body: {
          row: EditableRow,
          cell: getEditableCell({ forceRender: ctx.forceRender }),
        },
      }}
      columns={ctx.columns}
      pagination={false}
      rowKey={(el: KeyResult) => el.id}
    />
  );
}
