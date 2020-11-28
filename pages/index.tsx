import { Layout } from "../components/Layout/Layout";
import { Typography } from "antd";
import { Provider as LoginProvider } from "components/Login/Context";

export default function Home() {
  return (
    <LoginProvider shouldRedirectToLogin={false}>
      <Layout>
        <Typography.Title level={1}>Welcome to Vision</Typography.Title>
      </Layout>
    </LoginProvider>
  );
}
