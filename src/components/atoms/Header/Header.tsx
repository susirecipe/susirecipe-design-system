import React from 'react';
import { StyledLargeHeader, StyledSmallHeader } from './Header.styled';

interface props {
  color?: string;
}

export const LargeHeader: React.FC<props> = ({ children, color }) => {
  let _color: string = '';
  if (color === 'black') {
    _color = '#1a1a1a';
  } else if (color === 'white') {
    _color = '#fff';
  } else if (color === 'brand') {
    _color = '#4284bd';
  } else if (color === 'point') {
    _color = '#e2ce38';
  }
  return <StyledLargeHeader color={_color}>{children}</StyledLargeHeader>;
};

export const SmallHeader: React.FC<props> = ({ children, color }) => {
  let _color: string = '';
  if (color === 'black') {
    _color = '#1a1a1a';
  } else if (color === 'white') {
    _color = '#fff';
  } else if (color === 'brand') {
    _color = '#4284bd';
  } else if (color === 'point') {
    _color = '#e2ce38';
  }
  return <StyledSmallHeader color={_color}>{children}</StyledSmallHeader>;
};
