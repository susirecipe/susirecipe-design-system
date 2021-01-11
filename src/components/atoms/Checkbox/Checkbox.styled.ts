import styled from 'styled-components';

export const StyledCheckbox = styled.input<{imgUrl: string}>`
  display: none;

  + label {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #e2ce38;
    border-radius: 50%;
    background: url(${props => props.imgUrl}) no-repeat center/70%;
    cursor: pointer;
  }

  &:checked + label {
    background-color: #e2ce38;
  }
`;
