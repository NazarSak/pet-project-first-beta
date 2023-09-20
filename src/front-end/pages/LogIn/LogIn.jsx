import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validAccounts } from 'front-end/components/UserList';
import { loginAsync } from 'front-end/redux/auth.js/actionCreator';
import { isAutorized } from 'front-end/redux/auth.js/authSlice';
import { toast } from 'react-toastify';
import {
  StyledForm,
  List,
  StyledField,
  BeforeGoogleParagraph,
  ToGoogleButton,
  Span,
  UnderGoogleParagraph,
  Container,
  Wrapper,
} from './login.styled';
import { ToLogin } from '../home/home.styled';
import wallet from '../../../assets/svgImage/wallet.png';
import googleLogo from '../../../assets/svgImage/google.svg';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const isValidAccount = validAccounts.find(
      account => account.username === username && account.password === password
    );

    if (isValidAccount) {
      dispatch(loginAsync({ username, password }));
      dispatch(isAutorized(username));
      navigate('/dashboard');
      toast.success('You are successfully logged in :)', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else if (username === '' && password === '') {
      toast.warning('fields must be filled', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      console.log('Неправильні дані автентифікації');
      toast.error('Wrong password or name. Try again', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <img src={wallet} alt="Wallet" width="675" height="545" />
      </Wrapper>
      <StyledForm action="">
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
              />
            </div>
          </li>
          <ToLogin type="submit" onClick={handleLogin}>
            Увійти
          </ToLogin>
        </List>
      </StyledForm>
    </Container>
  );
};
