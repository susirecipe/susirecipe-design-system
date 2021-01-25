import React from 'react';
import { StyledConsultantCard } from './ConsultantCard.styled';

interface consultant {
  name: string;
  position: string;
  career: Array<string>;
  profileImgSrc: string;
}

const ConsultantCard: React.FC<consultant> = ({ name, position, career, profileImgSrc }) => {
  return (
    <StyledConsultantCard>
      <h2>{position}</h2>
      <h1>{name} 컨설턴트</h1>
      <ul>
        {career.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
        <img src={profileImgSrc} alt="profile_img" />
      </ul>
    </StyledConsultantCard>
  );
};

export default ConsultantCard;
