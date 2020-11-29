import "../styles/globals.css";
import "antd/dist/antd.min.css";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  return (
    // <ApolloProvider client={client}>
    <Component {...pageProps} />
    // </ApolloProvider>
  );
}

export default MyApp;
