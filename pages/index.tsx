import { Layout } from "../components/Layout/Layout";
import { Vision } from "../components/Vision/Vision";
import { Auth0Provider } from "@auth0/auth0-react";

export default function Home() {
  return (
    <Layout>
      <Auth0Provider
        domain="dev-w9ujtff3.auth0.com"
        clientId="F2yfqBBhUfkNvolDpymwpkxa42JYP566"
        redirectUri={"http://localhost:5100"}
      >
        <Vision />
      </Auth0Provider>
    </Layout>
  );
}
