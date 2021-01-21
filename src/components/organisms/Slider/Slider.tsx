import React from 'react';
import Slick from 'react-slick';
import { StyledSlider } from './Slider.styled';
import Card from 'components/molecules/Card/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const StyledPrevButton = styled.button`
  width: 40px;
  height: 40px;
  left: -40px;
  &::before {
    font-size: 40px;
    color: #ccc;
  }
`;

const StyledNextButton = styled.button`
  width: 40px;
  height: 40px;
  right: -40px;
  &::before {
    font-size: 40px;
    color: #ccc;
  }
`;

const PrevButton = ({ className, style, onClick }: any) => {
  return (
    <StyledPrevButton className={className} style={{ ...style }} onClick={onClick}>
      Previous
    </StyledPrevButton>
  );
};

const NextButton = ({ className, style, onClick }: any) => {
  return (
    <StyledNextButton className={className} style={{ ...style }} onClick={onClick}>
      Previous
    </StyledNextButton>
  );
};

interface props {
  slidesToShow?: number;
  autoplay?: boolean;
}

const Slider: React.FC<props> = ({ slidesToShow = 2, autoplay = true }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay,
    autoplaySpeed: 5000,
    slidesToShow,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  return (
    <StyledSlider>
      <Slick {...settings}>
        <Card width="80%" height="200px" header="test">
          1
        </Card>
        <Card width="80%" height="200px" header="test">
          2
        </Card>
        <Card width="80%" height="200px" header="test">
          3
        </Card>
        <Card width="80%" height="200px" header="test">
          4
        </Card>
      </Slick>
    </StyledSlider>
  );
};

export default Slider;
