import React from 'react';
import { BiLoaderCircle } from 'react-icons/bi';
import { ButtonDefault } from './Button.styled';

interface props {
  width: string;
  height: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<props> = ({ children, width, height, disabled, loading, onClick }) => {
  return (
    <ButtonDefault width={width} height={height} disabled={disabled} loading={loading} onClick={onClick}>
      {loading ? <BiLoaderCircle /> : children}
    </ButtonDefault>
  );
};

export default Button;
