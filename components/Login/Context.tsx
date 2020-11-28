import { createMyContext } from "lib/createMyContext";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { ReactNode, useEffect } from "react";
import type { User } from "./types";

interface ProviderProps {
  shouldRedirectToLogin?: boolean;
}

function hook(props: ProviderProps) {
  const auth = useAuth0();

  const { isLoading, loginWithRedirect: login, logout } = auth;
  const user: User | undefined = auth.user;

  useEffect(() => {
    if (props.shouldRedirectToLogin && !user && !isLoading) {
      login();
    }
  }, [props.shouldRedirectToLogin, user, isLoading]);

  return {
    user,
    logout,
    login,
  };
}

const { Provider: LoginProvider, useContext } = createMyContext<
  Parameters<typeof hook>[0],
  ReturnType<typeof hook>
>(hook);

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
      <LoginProvider {...props}>{children}</LoginProvider>
    </Auth0Provider>
  );
}
