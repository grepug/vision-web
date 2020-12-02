import { Dropdown, Menu, Button } from "antd";
import { useLoginCtx } from "../Login/Context";

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
                  returnTo: `${location.protocol}//${location.host}`,
                })
              }
            >
              Logout
            </Menu.Item>
          </Menu>
        }
      >
        <img
          src={ctx?.auth0User?.picture}
          alt={ctx?.user.name}
          style={{ width, height: width, borderRadius: "50%" }}
        />
      </Dropdown>
    );
  }

  return <Button onClick={() => ctx?.login()}>Login</Button>;
}
