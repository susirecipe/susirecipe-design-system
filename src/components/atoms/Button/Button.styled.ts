import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ width: string; height: string; disabled?: boolean; isLoading?: boolean }>`
  width: ${props => props.width};
  height: ${props => props.height};
  border: none;
  border-radius: 10px;
  background-color: #e2ce38;
  box-shadow: 0 2px 4px 0 #eaeaea;
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  ${props =>
    props.isLoading &&
    css`
      cursor: not-allowed;
    `}

  &:hover {
    transform: translateZ(0) scale(0.97);
  }

  svg {
    font-size: 1.7rem;

    -webkit-animation: spin 3s linear infinite;
    -moz-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;
