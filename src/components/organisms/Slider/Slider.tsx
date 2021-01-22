import React from 'react';
import Slick from 'react-slick';
import { StyledSlider } from './Slider.styled';
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

  @media (max-width: 769px) {
    width: 30px;
    height: 30px;
    left: -33px;

    &::before {
      font-size: 30px;
    }
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

  @media (max-width: 769px) {
    width: 30px;
    height: 30px;
    right: -33px;

    &::before {
      font-size: 30px;
    }
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
  slideCards: Array<React.ReactNode>;
  slidesToShow?: number;
  autoplay?: boolean;
}

const Slider: React.FC<props> = ({ slideCards, slidesToShow = 2, autoplay = true }) => {
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
        {slideCards.map((card, idx) => (
          <React.Fragment key={idx}>
            <div className="slide-card">{card}</div>
          </React.Fragment>
        ))}
      </Slick>
    </StyledSlider>
  );
};

export default Slider;
