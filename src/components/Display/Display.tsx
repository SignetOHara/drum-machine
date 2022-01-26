import React from 'react';
import { StyledDisplay } from './styles';

interface Props {
  id: string;
  children: React.ReactNode;
}

export const Display = ({ id, children }: Props) => {
  return <StyledDisplay id={id}>{children}</StyledDisplay>;
};
