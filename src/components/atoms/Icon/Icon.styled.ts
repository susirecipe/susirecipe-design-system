import styled from 'styled-components';

export const IconDefault = styled.img<{linked?: boolean}>`
  margin: 10px;
`;

export const StyledWebIcon = styled(IconDefault)`
  width: 24px;
  height: 24px;
`;

export const StyledAppIcon = styled(IconDefault)`
  width: 16px;
  height: 16px;
`;