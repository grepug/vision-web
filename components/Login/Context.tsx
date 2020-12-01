import { createMyContext } from "lib/createMyContext";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { ReactNode, useEffect, useMemo, useState } from "react";
import type { User } from "./types";
import {
  ApolloClient,
  InMemoryCache,
  useLazyQuery,
  ApolloProvider,
} from "@apollo/client";
import GetUserGQL from "graphql/queries/getUser.gql";
import {
  GetUser,
  GetUserVariables,
} from "graphql/queries/__generated__/GetUser";

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

  const apolloClient = useMemo(
    () =>
      new ApolloClient({
        connectToDevTools: true,
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URI!,
        cache: new InMemoryCache(),
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      }),
    [jwt],
  );

  const [loadUser, { data: user }] = useLazyQuery<GetUser, GetUserVariables>(
    GetUserGQL,
    {
      client: apolloClient,
      variables: {
        auth0UserId:
          auth0User?.["https://hasura.io/jwt/claims"]["x-hasura-user-id"] ?? "",
      },
    },
  );

  useEffect(() => {
    if (props.shouldRedirectToLogin && !auth0User && !isLoading) {
      login();
    }
  }, [props.shouldRedirectToLogin, auth0User, isLoading]);

  useEffect(() => {
    if (auth0User) {
      loadUser();

      getIdTokenClaims().then((res) => {
        setJwt(res?.__raw);
      });
    }
  }, [auth0User]);

  return {
    auth0User,
    user: user?.user[0],
    logout,
    login,
    apolloClient,
  };
}

const {
  Provider: LoginProvider,
  Context: { Consumer: LoginConsumer },
  useContext,
} = createMyContext<Parameters<typeof hook>[0], ReturnType<typeof hook>>(hook);

export { useContext };

export function Provider({
  children,
  ...props
}: { children?: ReactNode } & ProviderProps) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI!}
    >
      <LoginProvider {...props}>
        <LoginConsumer>
          {(ctx) => (
            <ApolloProvider client={ctx!.apolloClient}>
              {children}
            </ApolloProvider>
          )}
        </LoginConsumer>
      </LoginProvider>
    </Auth0Provider>
  );
}
