import React from 'react';
import { StyledStepCard, StyledStepCardHeader, StyledStepCardContent } from './StepCard.styled';

interface props {
  header: string;
}

const StepCard: React.FC<props> = ({ header, children }) => {
  return (
    <StyledStepCard>
      <StyledStepCardHeader>{header}</StyledStepCardHeader>
      <StyledStepCardContent>{children}</StyledStepCardContent>
    </StyledStepCard>
  );
};

export default StepCard;
