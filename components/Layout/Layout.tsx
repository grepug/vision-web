import { Layout as LayoutAnt, Typography, Divider } from "antd";

export function Layout(props: { children?: React.ReactNode }) {
  return (
    <LayoutAnt>
      <LayoutAnt.Content style={{ padding: "0 300px", marginTop: 64 }}>
        <Typography.Title>Vision</Typography.Title>
        <Divider />
        {props.children}
      </LayoutAnt.Content>
    </LayoutAnt>
  );
}
