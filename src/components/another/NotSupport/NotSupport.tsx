import React from 'react';
import { StyledWrapper } from './NotSupport.styled';

const NotSupport: React.FC = () => {
  return (
    <StyledWrapper>
      <span>모바일에서는 Overview를</span>
      <span>지원하지 않습니다.</span>
    </StyledWrapper>
  );
};

export default NotSupport;
