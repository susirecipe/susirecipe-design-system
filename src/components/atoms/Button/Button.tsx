import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';
import { StyledButton } from './Button.styled';

interface props {
  width: string;
  height: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<props> = props => {
  const { isLoading, children } = props;
  return <StyledButton {...props}>{isLoading ? <BiLoaderCircle /> : children}</StyledButton>;
};

export default Button;
