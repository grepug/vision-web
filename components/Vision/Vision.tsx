import * as React from "react";
import { CycleRow } from "./CycleRow";
import { KeyResultsDetailModal } from "./Modals/KeyResultDetailModal";
import { OKRTable } from "./OKRTable";
import { Provider, useContext } from "./Contexts/CycleContext";
import { OKRTableActionRow } from "./OKRTableActionRow";
import { VerticalSpace } from "./VerticalSpace";
import { Button, Col, Row } from "antd";

export function Vision() {
  return (
    <div style={{ paddingBottom: 200 }}>
      <Provider>
        <OKR />
      </Provider>
    </div>
  );
}

function OKR() {
  const ctx = useContext()!;

  if (!ctx.curCycle.current) {
    return (
      <Row align="middle" justify="center" style={{ marginTop: 200 }}>
        <Col></Col>
        <Col>
          <Button onClick={ctx.createCycle}>Create Your First Cycle</Button>
        </Col>
        <Col></Col>
      </Row>
    );
  }

  return (
    <div>
      <KeyResultsDetailModal key={ctx?.curKeyResultDetail.current?.id} />
      <CycleRow />
      <VerticalSpace />
      <OKRTableActionRow />
      <VerticalSpace />
      <OKRTable />
    </div>
  );
}
