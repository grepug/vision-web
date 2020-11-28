import { Layout as LayoutAnt, Typography, Divider, Row, Col } from "antd";
import { Avatar } from "./Avatar";

const { Header } = LayoutAnt;

export function Layout(props: { children?: React.ReactNode }) {
  return (
    <LayoutAnt>
      <Header>
        <Row justify="space-between" align="middle">
          <Col>
            <img
              src={process.env.NEXT_PUBLIC_LOGO_URL}
              alt="Vision logo"
              style={{ borderRadius: 6 }}
            />
          </Col>
          <Col>
            <Avatar />
          </Col>
        </Row>
      </Header>
      <LayoutAnt.Content
        style={{ width: 1100, margin: "0 auto", marginTop: 64 }}
      >
        <Typography.Title>Vision</Typography.Title>
        <Divider />
        {props.children}
      </LayoutAnt.Content>
    </LayoutAnt>
  );
}
