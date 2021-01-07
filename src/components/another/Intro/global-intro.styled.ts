import styled from 'styled-components';

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

export const ComponentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ControlBox = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #374553;

  input {
    width: 150px;
    margin: 10px 0;
    margin-left: 15px;
    padding: 7px;
    border: none;
    border-radius: 5px;
    box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
    background-color: #fafafa;
    font-size: 0.8rem;
    color: #374553;
  }

  input:focus {
    outline: none;
    background-color: #f6f6f6;
  }
`;

export const PropsTable = styled.table`
  width: 100%;
  margin: 20px 0;
  margin-bottom: 100px;
  text-align: center;
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); */

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
  padding: 15px;
  border-radius: 15px;
  background-color: #f6f6f6;
`;

export const ListBox = styled.ul`
  width: 100%;
  margin: 20px 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
    padding: 7px 0;
  }
`;

export const BlackBGBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
`;
