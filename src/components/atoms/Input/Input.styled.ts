import styled, { css } from 'styled-components';

const readOnlyCss = css`
  opacity: 0.6;

  &:focus {
    border: 3px solid transparent;
  }
`;

const InputDefault = styled.input<{ width: string, readOnly?: boolean }>`
  width: ${props => props.width};
  padding: 10px;
  border: 3px solid transparent;
  border-radius: 10px;
  font-size: 0.85rem;
`;

export const StyledWhiteInput = styled(InputDefault)`
  background-color: #fff;
  color: #131313;

  &:focus {
    outline: none;
    border: 3px solid #e2ce38;
  }

  ${props => props.readOnly && readOnlyCss}
`;

export const StyledBlackInput = styled(InputDefault)`
  background-color: #818181;
  color: #fff;

  &:focus {
    outline: none;
    border: 3px solid #6b6b6b;
  }

  ${props => props.readOnly && readOnlyCss}
`;
