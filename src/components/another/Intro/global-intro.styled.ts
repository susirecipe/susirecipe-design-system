import styled, { css } from 'styled-components';

export const IntroContainer = styled.article`
  margin: 30px 0;
  text-align: left;
`;

export const IntroSmallHeader = styled.h2`
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 1.5rem;
  color: #374553;
`;

export const IntroParagraph = styled.p`
  margin-bottom: 70px;
  line-height: 1.5;
  color: #374553;
`;

export const ComponentWrapper = styled.div<{ blackBG?: boolean }>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props =>
    props.blackBG &&
    css`
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
    `}
`;

export const ControlBox = styled.div<{ direction?: string }>`
  padding: 20px;
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: center;
  align-items: center;
  color: #374553;

  @media (max-width: 769px) {
    flex-direction: column;
  }

  input {
    width: 150px;
    margin: 10px 15px;
  }

  input[type='text'] {
    padding: 7px;
    border: none;
    border-radius: 5px;
    box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
    background-color: #fafafa;
    font-size: 0.8rem;
    color: #374553;
  }

  input[type='text']:focus {
    outline: none;
    background-color: #f6f6f6;
  }

  input[type='submit'] {
    width: 100px;
    padding: 7px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    background-color: #e6e6e6;
    font-size: 0.8rem;
    color: #374553;
    cursor: pointer;
  }

  input[type='color'] {
    width: 60px;
  }

  button {
    width: 140px;
    height: 40px;
    margin: 10px 20px;
    border: 3px solid #4284bd;
    border-radius: 10px;
    background-color: transparent;
    font-size: 0.9rem;
    color: #4284bd;
    cursor: pointer;
  }

  button.active {
    background-color: #4284bd;
    color: #fff;
  }

  @media (max-width: 1025px) {
    form.responsive {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const PropsTable = styled.table`
  width: 100%;
  margin: 20px 0;
  margin-bottom: 100px;
  text-align: center;

  td,
  th {
    width: 33%;
    padding: 12px 15px;
    color: #374553;
  }

  th {
    background-color: #499cd3;
    color: #fff;
  }

  th:first-child {
    border-radius: 10px 0 0 0;
  }

  th:last-child {
    border-radius: 0 10px 0 0;
  }

  tr {
    border-bottom: 1px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #f3f3f3;
  }
`;

export const MarginBox = styled.div<{ margin: number }>`
  margin-bottom: ${props => `${props.margin}px`};
`;

export const CodeBox = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 15px;
  background-color: #f6f6f6;
  line-height: 1.3;
`;

export const ListBox = styled.ul`
  width: 100%;
  margin: 20px 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
    padding: 15px 0;
    color: #374553;
  }
`;
