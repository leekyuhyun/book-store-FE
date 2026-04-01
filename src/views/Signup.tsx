import { useState } from 'react';
import Title from '../components/common/Title';
import InputText from '../components/common/Input';
import Button from '../components/common/Button';
import { signup } from '../api/auth.api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import type { User } from '../models/user.model';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<User>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert('회원가입이 완료되었습니다!');
      navigate('/login');
    } catch {
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <SignupStyle>
      <Title size="large">회원가입</Title>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <InputText
            placeholder="이메일"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </fieldset>
        <fieldset>
          <InputText
            placeholder="비밀번호"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </fieldset>
        <Button size="large" scheme="primary" disabled={false} isLoading={false}>
          가입하기
        </Button>
      </form>
    </SignupStyle>
  );
}

const SignupStyle = styled.div`
  max-width: 400px;
  margin: 80px auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
    }
  }
`;
