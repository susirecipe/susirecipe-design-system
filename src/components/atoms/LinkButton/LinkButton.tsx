import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLinkButton } from './LinkButton.styled';

interface props {
  id?: string;
  to: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const LinkButton: React.FC<props> = ({ children, id, to, active, onClick }) => {
  return (
    <StyledLinkButton>
      <Link id={id} to={to} className={active ? 'active' : undefined} onClick={onClick}>
        {children}
      </Link>
    </StyledLinkButton>
  );
};

export default LinkButton;
