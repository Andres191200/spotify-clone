import React from "react";

const spacings = {
  mini: "var(--padding-mini)",
  small: "var(--padding-sm)",
  medium: "var(--padding-md)",
  large: "var(--padding-lg)",
};

type TSpacing = keyof typeof spacings;

export default function WidthSeparator({ spacing }: { spacing: TSpacing }) {
  return <div style={{ paddingInline: spacings[spacing] }}></div>;
}
