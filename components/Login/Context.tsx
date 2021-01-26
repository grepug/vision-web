import { createMyContext } from "lib/createMyContext";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { ReactNode, useEffect, useMemo, useState } from "react";
import type { User } from "./types";
import { GET_USER_GQL } from "gql/user.gql";
import { GetUserQuery, GetUserQueryVariables } from "gql/gql.generated";
import { GraphQLClient } from "graphql-request";

interface ProviderProps {
  shouldRedirectToLogin?: boolean;
}

function hook(props: ProviderProps) {
  const auth = useAuth0();

  const {
    isLoading,
    loginWithRedirect: login,
    logout,
    getIdTokenClaims,
  } = auth;

  const auth0User: User | undefined = auth.user;

  const [jwt, setJwt] = useState<string>();
  const [user, setUser] = useState<GetUserQuery["user"][0]>();

  const client = useMemo(
    () =>
      jwt
        ? new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URI!, {
            headers: {
              authorization: `Bearer ${jwt}`,
            },
          })
        : null,
    [jwt],
  );

  useEffect(() => {
    if (props.shouldRedirectToLogin && !auth0User && !isLoading) {
      login();
    }
  }, [props.shouldRedirectToLogin, auth0User, isLoading]);

  useEffect(() => {
    if (client) {
      client
        .request<GetUserQuery, GetUserQueryVariables>(GET_USER_GQL, {
          auth0UserId:
            auth0User?.["https://hasura.io/jwt/claims"]["x-hasura-user-id"] ??
            "",
        })
        .then(({ user }) => setUser(user[0]));
    }

    getIdTokenClaims().then((res) => {
      setJwt(res?.__raw);
    });
  }, [auth0User, jwt]);

  return {
    auth0User,
    user,
    setUser,
    logout,
    login,
    client,
  };
}

const {
  Provider: LoginProvider,
  Context: { Consumer: LoginConsumer },
  useContext,
} = createMyContext<Parameters<typeof hook>[0], ReturnType<typeof hook>>(hook);

export { useContext as useLoginCtx };

export function Provider({
  children,
  ...props
}: { children?: ReactNode } & ProviderProps) {
  const redirectUri =
    typeof window !== "undefined"
      ? `${window.location.protocol}//${window.location.host}/vision`
      : "";

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      redirectUri={redirectUri}
    >
      <LoginProvider {...props}>
        <LoginConsumer>{(ctx) => children}</LoginConsumer>
      </LoginProvider>
    </Auth0Provider>
  );
}
