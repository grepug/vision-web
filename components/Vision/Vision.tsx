import * as React from "react";
import { Divider, Typography } from "antd";
import { ExportModal } from "./Modals/ExportModal";
import { ImportModal } from "./Modals/ImportModal";
import { CycleRow } from "./CycleRow";
import { KeyResultsDetailModal } from "./Modals/KeyResultDetailModal";
import { OKRTable } from "./OKRTable";
import { Provider, Consumer } from "./Context";
import { OKRTableActionRow } from "./OKRTableActionRow";
import { VerticalSpace } from "./VerticalSpace";

export function Vision() {
  return (
    <div style={{ paddingBottom: 200 }}>
      <Provider>
        <ExportModal />
        <ImportModal />
        <Consumer>
          {(ctx) => (
            <KeyResultsDetailModal key={ctx?.curKeyResultDetail.current?.id} />
          )}
        </Consumer>
        <CycleRow />
        <VerticalSpace />
        <OKRTableActionRow />
        <VerticalSpace />
        <OKRTable />
      </Provider>
    </div>
  );
}
