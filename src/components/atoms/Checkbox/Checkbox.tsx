import React from 'react';
import { StyledCheckbox } from './Checkbox.styled';

interface props {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<props> = ({ id, checked, onChange }) => {
  const imageUrl = process.env.PUBLIC_URL + (checked ? '/asset/checked.png' : '/asset/non-check.png');
  return (
    <>
      <StyledCheckbox type="checkbox" id={id} checked={checked} onChange={onChange} imgUrl={imageUrl} />
      <label htmlFor={id}></label>
    </>
  );
};

export default Checkbox;
