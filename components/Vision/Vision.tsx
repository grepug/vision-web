import * as React from "react";
import { CycleRow } from "./CycleRow";
import { KeyResultsDetailModal } from "./Modals/KeyResultDetailModal";
import { OKRTable } from "./OKRTable";
import { Provider, useContext } from "./Contexts/CycleContext";
import { OKRTableActionRow } from "./OKRTableActionRow";
import { VerticalSpace } from "./Styles/VerticalSpace";
import { Button, Col, Row } from "antd";
import { RecordModal } from "./Modals/RecordModal";
import { useAuth0 } from "@auth0/auth0-react";
import { SettingsModal } from "./Modals/SettingsModal";

export function Vision() {
  const { loginWithRedirect, user, getIdTokenClaims } = useAuth0();

  console.log("user", user);

  React.useEffect(() => {
    getIdTokenClaims().then((res) => console.log(res));
  }, []);

  return (
    <div style={{ paddingBottom: 200 }}>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
      <Provider>
        <OKR />
      </Provider>
    </div>
  );
}

function OKR() {
  const ctx = useContext()!;
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null;
  }

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
      <KeyResultsDetailModal key={ctx?.curKeyResult.current?.id} />
      <CycleRow />
      <VerticalSpace />
      <OKRTableActionRow />
      <VerticalSpace />
      <OKRTable />
      <RecordModal />
      <SettingsModal />
    </div>
  );
}
