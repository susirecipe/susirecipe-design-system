import React from 'react';
import { StyledWhiteInput, StyledBlackInput } from './Input.styled';

interface props {
  width: string;
  value: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  readOnly?: boolean;
  black?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<props> = props => {
  const { black } = props;
  return <>{black ? <StyledBlackInput type="text" {...props} /> : <StyledWhiteInput type="text" {...props} />}</>;
};

export const EmailInput: React.FC<props> = props => {
  const { black } = props;
  return <>{black ? <StyledBlackInput type="email" {...props} /> : <StyledWhiteInput type="email" {...props} />}</>;
};

export const PasswordInput: React.FC<props> = props => {
  const { black } = props;
  return (
    <>{black ? <StyledBlackInput type="password" {...props} /> : <StyledWhiteInput type="password" {...props} />}</>
  );
};

export const NumberInput: React.FC<props> = props => {
  const { black } = props;
  return <>{black ? <StyledBlackInput type="number" {...props} /> : <StyledWhiteInput type="number" {...props} />}</>;
};
