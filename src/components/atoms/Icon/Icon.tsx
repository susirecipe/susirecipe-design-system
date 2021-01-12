import React from 'react';
import { Link } from 'react-router-dom';
import { StyledWebIcon, StyledAppIcon } from './Icon.styled';

interface props {
  src: string;
  alt?: string;
  to?: string;
  onClick?: (event:React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

export const WebIcon: React.FC<props> = ({ src, alt, to, onClick }) => {
  return to ? (
    <Link to={to}>
      <StyledWebIcon src={src} alt={alt} linked onClick={onClick} />
    </Link>
  ) : (
    <StyledWebIcon src={src} alt={alt} onClick={onClick} />
  );
};

export const AppIcon: React.FC<props> = ({ src, alt, to, onClick }) => {
  return to ? (
    <Link to={to}>
      <StyledAppIcon src={src} alt={alt} linked onClick={onClick} />
    </Link>
  ) : (
    <StyledAppIcon src={src} alt={alt} onClick={onClick} />
  );
};
