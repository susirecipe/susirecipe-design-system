import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'common/store';
import LinkButton from 'components/atoms/LinkButton/LinkButton';
import { StyledDropdown } from './Dropdown.styled';

interface props {
  menu: Array<Menu>;
  leftPos?: number;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Dropdown: React.FC<props> = ({ menu, leftPos, onMouseEnter, onMouseLeave }) => {
  const isShow = useSelector<RootState, boolean>(state => state.dropdown);

  return (
    <StyledDropdown leftPos={leftPos} show={isShow} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {menu.map((menuItem, idx) => (
        <LinkButton key={idx} to={menuItem.link}>
          {menuItem.name}
        </LinkButton>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
