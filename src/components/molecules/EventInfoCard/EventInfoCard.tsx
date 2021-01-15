import React from 'react';
import { StyledEventInfoCard, StyledInfoTab, StyledInfoRow, StyledInfoContent } from './EventInfoCard.styled';

export interface row {
  tab: string;
  content: React.ReactNode;
}

interface props {
  rows: Array<row>;
}

const EventInfoCard: React.FC<props> = ({ rows }) => {
  return (
    <StyledEventInfoCard>
      {rows.map((row, idx) => (
        <StyledInfoRow key={idx}>
          <StyledInfoTab>{row.tab}</StyledInfoTab>
          <StyledInfoContent>{row.content}</StyledInfoContent>
        </StyledInfoRow>
      ))}
    </StyledEventInfoCard>
  );
};

export default EventInfoCard;
