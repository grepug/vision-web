import * as React from "react";
import { Divider, Typography } from "antd";
import { ExportModal } from "./Modals/ExportModal";
import { ImportModal } from "./Modals/ImportModal";
import { CycleRow } from "./CycleRow";
import { KeyResultsDetailModal } from "./Modals/KeyResultDetailModal";
import { OKRTable } from "./OKRTable";
import { Provider, Consumer } from "./Context";
import { OKRTableActionRow } from "./OKRTableActionRow";

export function Vision() {
  return (
    <div style={{ paddingBottom: 200 }}>
      <Provider>
        <ExportModal />
        <ImportModal />
        <Consumer>
          {(ctx) => (
            <KeyResultsDetailModal key={ctx?.curKeyResultDetailIndex.current} />
          )}
        </Consumer>
        <CycleRow />
        <Divider />
        <Typography.Title level={3}>OKR</Typography.Title>
        <VerticalSpace />
        <OKRTableActionRow />
        <VerticalSpace />
        <OKRTable />
      </Provider>
    </div>
  );
}

function VerticalSpace(props?: { height?: number }) {
  return <div style={{ width: "100%", height: props?.height ?? 24 }}></div>;
}
