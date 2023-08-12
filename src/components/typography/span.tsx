import React, { HTMLAttributes } from 'react';
import { Span } from './span.style';

export type SpanProps = HTMLAttributes<HTMLSpanElement> & {
  variant: 'primary' | 'button';
};

function SpanComponent(props: SpanProps) {
  return <Span {...props} />;
}

export default SpanComponent;
