import React, { useState } from 'react';
import { StyledBanner, StyledDescriptionBox, StyledSubmitBox } from './Banner.styled';
import { TextInput } from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Checkbox from 'components/atoms/Checkbox/Checkbox';

interface props {
  description: string;
}

const Banner: React.FC<props> = ({ description }) => {
  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    private: true,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputs({ name: '', phone: '', private: true });
    alert(`이름: ${inputs.name}\n연락처: ${inputs.phone}\n신청이 완료되었습니다.`);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = event.target;
    setInputs({ ...inputs, [id]: checked });
  };
  return (
    <StyledBanner>
      <StyledDescriptionBox>
        <h2>{description}</h2>
        <h1>
          지금 바로 온라인 <span style={{ color: '#bfa63c' }}>무료상담</span> 신청
        </h1>
      </StyledDescriptionBox>
      <StyledSubmitBox onSubmit={handleSubmit}>
        <div className="inputbox">
          <TextInput
            width="100%"
            value={inputs.name}
            name="name"
            placeholder="이름을 입력하세요"
            required
            onChange={handleInput}
          />
          <br />
          <br />
          <TextInput
            width="100%"
            value={inputs.phone}
            name="phone"
            placeholder="연락처를 입력하세요"
            required
            onChange={handleInput}
          />
        </div>
        <div className="buttonbox">
          <Button width="80%" height="70px">
            무료상담 하기
          </Button>
          <br />
          <div className="checkbox">
            <Checkbox id="private" checked={inputs.private} onChange={handleCheck} />
            <span>개인정보보호정책에 동의합니다</span>
          </div>
        </div>
      </StyledSubmitBox>
    </StyledBanner>
  );
};

export default Banner;
