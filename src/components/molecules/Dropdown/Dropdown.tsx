import React from 'react';
import LinkButton from 'components/atoms/LinkButton/LinkButton';
import { StyledDropdown } from './Dropdown.styled';

interface props {
  menu: Array<{
    name: string;
    link: string;
  }>;
  leftPos?: number;
}

const Dropdown: React.FC<props> = ({ menu, leftPos }) => {
  return (
    <StyledDropdown style={{ paddingLeft: leftPos }}>
      {menu.map((menuItem, idx) => (
        <LinkButton key={idx} to={menuItem.link}>{menuItem.name}</LinkButton>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
