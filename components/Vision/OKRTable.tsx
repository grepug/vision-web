import * as React from "react";
import { Table } from "antd";
import { KeyResult } from "./models/KeyResult";
import { getEditableCell } from "./EditableCell";
import { EditableRow } from "./EditableRow";
import { useContext } from "./Contexts/CycleContext";

export function OKRTable() {
  const ctx = useContext()!;

  const cycle = ctx.curCycle;

  if (!cycle) {
    return null;
  }

  return (
    <Table
      key={ctx.key}
      bordered
      size="small"
      dataSource={cycle.renderingKeyResults}
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
