import * as React from "react";
import { CycleRow } from "./CycleRow";
import { KeyResultsDetailModal } from "./Modals/KeyResultDetailModal";
import { OKRTable } from "./OKRTable";
import { Provider, Consumer } from "./Contexts/CycleContext";
import { OKRTableActionRow } from "./OKRTableActionRow";
import { VerticalSpace } from "./VerticalSpace";

export function Vision() {
  return (
    <div style={{ paddingBottom: 200 }}>
      <Provider>
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
