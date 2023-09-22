import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { validAccounts } from 'front-end/components/UserList';
import { loginAsync } from 'front-end/redux/auth.js/actionCreator';
import { isAutorized } from 'front-end/redux/auth.js/authSlice';
import { FidgetSpinner } from 'react-loader-spinner';
import { showToast } from 'front-end/components/helpers/Toaster';
import { SpinerContainer } from 'front-end/components/header/header.styled';
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
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const isValidAccount = validAccounts.find(
      account => account.username === username && account.password === password
    );
    setIsLoading(true);
    setTimeout(() => {
      if (isValidAccount) {
        dispatch(loginAsync({ username, password }));
        dispatch(isAutorized(username));
        navigate('/dashboard');
        showToast('You are successfully logged in :');
      } else if (username === '' && password === '') {
        showToast('fields must be filled', 'warning');
      } else {
        showToast('Wrong password or name. Try again', 'error');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <Wrapper>
        <img src={wallet} alt="Wallet" width="675" height="545" />
        <StyledForm action="">
          <BeforeGoogleParagraph>
            You can log in with your Google Account:
          </BeforeGoogleParagraph>
          <ToGoogleButton type="submit">
            <Span>
              <img src={googleLogo} alt="Logo" width="17" height="18"/>
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
        <SpinerContainer>
          {isLoading && (
          <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={['#ff0000', '#00ff00', '#0000ff']}
          backgroundColor="#F4442E"
        />
          )}
        </SpinerContainer>
      </Wrapper>
    </Container>
  );
};
