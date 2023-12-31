import React, { HTMLAttributes } from 'react';
import { P, PBold, PSmall } from './body.style';

type Body = 'body' | 'bodySmall' | 'bodyBold';

export interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant: Body;
}

const bodyComponents: Record<Body, React.FC<HTMLAttributes<HTMLParagraphElement>>> = {
  body: ({ ...restProps }) => <P {...restProps} />,
  bodySmall: ({ ...restProps }) => <PSmall {...restProps} />,
  bodyBold: ({ ...restProps }) => <PBold {...restProps} />,
};

function Body(props: BodyProps) {
  const BodyComponent = bodyComponents[props.variant];
  return <BodyComponent {...props} />;
}

export default Body;
