import React, { useState } from 'react';
import {
  StyledForm,
  BeforeGoogleParagraph,
  ToGoogleButton,
  UnderGoogleParagraph,
  List,
  StyledField,
  Span,
} from 'front-end/pages/LogIn/login.styled';
import { ToLogin } from 'front-end/pages/home/home.styled';
import googleLogo from '../../../assets/svgImage/google.svg';

export const Form = ({ handleLogin, handleKeyDown }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <BeforeGoogleParagraph>
        You can log in with your Google Account:
      </BeforeGoogleParagraph>
      <ToGoogleButton type="submit">
        <Span>
          <img src={googleLogo} alt="Logo" width="17" height="18" />
        </Span>
        Google
      </ToGoogleButton>

      <UnderGoogleParagraph>
        Or log in using an email and password, after registering:
      </UnderGoogleParagraph>
      <List>
        <li>
          <div>
            <StyledField
              type="text"
              placeholder="Ім'я користувача"
              value={username}
              onChange={e => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </li>
        <li>
          <div>
            <StyledField
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </li>
        <ToLogin type="submit">Увійти</ToLogin>
      </List>
    </StyledForm>
  );
};
