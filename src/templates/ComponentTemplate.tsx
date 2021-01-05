import React from 'react';
import { ComponentTemplateContainer, ComponentHeader } from './ComponentTemplate.styled';

interface props {
  header: string;
  content: JSX.Element;
}

const ComponentTemplate: React.FC<props> = ({ header, content }) => {
  return (
    <ComponentTemplateContainer>
      <ComponentHeader>{header}</ComponentHeader>
      {content}
    </ComponentTemplateContainer>
  );
};

export default ComponentTemplate;
