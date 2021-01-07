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

export const TextInput: React.FC<props> = ({
  width,
  value,
  name,
  placeholder,
  required,
  minLength,
  maxLength,
  readOnly,
  black,
  onChange,
}) => {
  return (
    <>
      {black ? (
        <StyledBlackInput
          type="text"
          width={width}
          value={value}
          name={name}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <StyledWhiteInput
          type="text"
          width={width}
          value={value}
          name={name}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </>
  );
};

export const EmailInput: React.FC<props> = ({
  width,
  value,
  name,
  placeholder,
  required,
  minLength,
  maxLength,
  readOnly,
  black,
  onChange,
}) => {
  return (
    <>
      {black ? (
        <StyledBlackInput
          type="email"
          width={width}
          value={value}
          name={name}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <StyledWhiteInput
          type="email"
          width={width}
          value={value}
          name={name}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </>
  );
};

export const PasswordInput: React.FC<props> = ({
  width,
  value,
  name,
  placeholder,
  required,
  minLength,
  maxLength,
  readOnly,
  black,
  onChange,
}) => {
  return (
    <>
      {black ? (
        <StyledBlackInput
          type="password"
          width={width}
          value={value}
          name={name}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <StyledWhiteInput
          type="password"
          width={width}
          value={value}
          name={name}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </>
  );
};

export const NumberInput: React.FC<props> = ({
  width,
  value,
  name,
  placeholder,
  required,
  minLength,
  maxLength,
  readOnly,
  black,
  onChange,
}) => {
  return (
    <>
      {black ? (
        <StyledBlackInput
          type="number"
          width={width}
          value={value}
          name={name}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <StyledWhiteInput
          type="number"
          width={width}
          value={value}
          name={name}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </>
  );
};
