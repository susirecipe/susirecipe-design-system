import React from 'react';
import { StyledUnderline } from './Underline.styled';

const Underline: React.FC = ({ children }) => {
  return <StyledUnderline>{children}</StyledUnderline>;
};

export default Underline;
