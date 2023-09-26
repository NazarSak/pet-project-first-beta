import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { validAccounts } from 'front-end/components/UserList';
import { loginAsync } from 'front-end/redux/auth.js/actionCreator';
import { isAutorized } from 'front-end/redux/auth.js/authSlice';
import { showToast } from 'front-end/components/helpers/Toaster';
import { SpinerContainer } from 'front-end/components/header/header.styled';
import { Spiner } from 'front-end/components/helpers/spiner';
import { Form } from 'front-end/components/form/Form';
import { Container, Wrapper } from './login.styled';

import wallet from '../../../assets/svgImage/wallet.png';

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    const handlePopState = () => {
      sessionStorage.removeItem('userData');
    };

    // Додавання обробника події "popstate" при завантаженні компонента
    window.addEventListener('popstate', handlePopState);

    // При видаленні компонента видаляємо обробник події
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };

  }, []);

  const handleLogin = (username, password) => {
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

        sessionStorage.setItem('userData', true);
        sessionStorage.setItem('userNameData', username);
      } else if (username === '' && password === '') {
        showToast('fields must be filled', 'warning');
      } else {
        showToast('Wrong password or name. Try again', 'error');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && e.target.tagName !== 'INPUT') {
      handleLogin();
    }
  };

  return (
    <Container>
      <Wrapper>
        <img src={wallet} alt="Wallet" width="675" height="545" />
      </Wrapper>
      <Form handleKeyDown={handleKeyDown} handleLogin={handleLogin} />
      <SpinerContainer>{isLoading && <Spiner />}</SpinerContainer>
    </Container>
  );
};
