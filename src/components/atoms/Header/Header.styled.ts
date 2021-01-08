import styled from 'styled-components';

const HeaderDefulat = styled.h1<{color?: string}>`
  margin-bottom: 20px;
  font-weight: 600;
  color: ${props => props.color}
`;

export const StyledLargeHeader = styled(HeaderDefulat)`
  font-size: 2.5rem;
`;

export const StyledSmallHeader = styled(HeaderDefulat)`
  font-size: 1.875rem;
`;
