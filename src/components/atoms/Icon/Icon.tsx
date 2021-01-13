import React from 'react';
import { Link } from 'react-router-dom';
import { StyledIcon } from './Icon.styled';

interface props {
  src: string;
  alt?: string;
  to?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

const Icon: React.FC<props> = props => {
  const { to } = props;
  return to ? (
    <Link to={to}>
      <StyledIcon {...props} linked />
    </Link>
  ) : (
    <StyledIcon {...props} />
  );
};

export default Icon;
