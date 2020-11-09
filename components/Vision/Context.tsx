import { createMyContext } from "../../lib/createMyContext";

function useVision(props: {}) {
  return {};
}

export const { Provider, useContext } = createMyContext<
  Parameters<typeof useVision>[0],
  ReturnType<typeof useVision>
>(useVision);
