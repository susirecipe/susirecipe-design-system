import React from 'react';
import { StyledCard, StyledCardHeader, StyledCardContent } from './Card.styled';

interface props {
  width: string;
  height: string;
  header: string;
  headerColor?: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

const Card: React.FC<props> = ({ width, height, header, headerColor, children, onClick }) => {
  return (
    <StyledCard width={width} onClick={onClick}>
      <StyledCardHeader headerColor={headerColor}>{header}</StyledCardHeader>
      <StyledCardContent height={height}>{children}</StyledCardContent>
    </StyledCard>
  );
};

export default Card;
