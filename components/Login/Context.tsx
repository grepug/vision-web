import { createMyContext } from "lib/createMyContext";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { ReactNode, useEffect } from "react";

function hook(_: {}) {
  const { user, loginWithRedirect, isLoading } = useAuth0();

  console.log("user", user, isLoading);

  useEffect(() => {
    if (!user && !isLoading) {
      loginWithRedirect();
    }
  }, [user]);

  return {
    user,
  };
}

const { Provider: LoginProvider } = createMyContext<
  Parameters<typeof hook>[0],
  ReturnType<typeof hook>
>(hook);

export function Provider(props: { children?: ReactNode }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI!}
    >
      <LoginProvider>{props.children}</LoginProvider>
    </Auth0Provider>
  );
}
