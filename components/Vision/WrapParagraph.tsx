import * as React from 'react';

export const WrapParagraph = (props: {
  text?: React.ReactNode | null;
  children?: (t: string) => React.ReactNode;
  style?: React.CSSProperties;
}) => {
  if (typeof props.text === 'string') {
    const p = props.text?.split('\n').map((t, i) => {
      if (!props.children) {
        return (
          <p style={{ marginBottom: 10, ...props.style }} key={i}>
            {t}
          </p>
        );
      }

      return <React.Fragment key={i}>{props.children(t)}</React.Fragment>;
    });

    return <>{p}</>;
  }

  return <>{props.text}</>;
};
