import * as React from "react";
import { createMyContext } from "../../../lib/createMyContext";

function useOKR(_: {}) {}

export const { Context, Provider } = createMyContext<
  Parameters<typeof useOKR>[0],
  ReturnType<typeof useOKR>
>(useOKR);
