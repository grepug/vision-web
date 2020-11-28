import { Dropdown, Menu, Button } from "antd";
import { useContext as useLoginCtx } from "../Login/Context";

export function Avatar() {
  const ctx = useLoginCtx();

  const width = 50;

  if (ctx?.user) {
    return (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item
              onClick={() =>
                ctx?.logout({
                  returnTo: process.env.NEXT_PUBLIC_AUTH0_LOGOUT_REDIRECT_URI,
                })
              }
            >
              Logout
            </Menu.Item>
          </Menu>
        }
      >
        <img
          src={ctx?.user.picture}
          alt={ctx?.user.nickname}
          style={{ width, height: width, borderRadius: "50%" }}
        />
      </Dropdown>
    );
  }

  return <Button onClick={() => ctx?.login()}>Login</Button>;
}
