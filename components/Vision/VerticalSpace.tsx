import * as React from "react";

export function VerticalSpace(props?: { height?: number }) {
  return <div style={{ width: "100%", height: props?.height ?? 24 }}></div>;
}
