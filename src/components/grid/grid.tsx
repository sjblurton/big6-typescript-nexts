import React, { HTMLAttributes } from 'react';
import { Wrapper } from './grid.style';

type Props = HTMLAttributes<HTMLDivElement> & {
  isCard: boolean;
};

function Grid(props: Props) {
  return <Wrapper {...props} />;
}

export default Grid;
