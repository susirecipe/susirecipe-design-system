import React from 'react';
import { StyledSubtitle } from './Subtitle.styled';

const Subtitle: React.FC = ({ children }) => {
  return <StyledSubtitle>{children}</StyledSubtitle>;
};

export default Subtitle;
