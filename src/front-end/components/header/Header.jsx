import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'front-end/redux/auth.js/authSlice';
import {
  Conatiner,
  Logo,
  SpinerContainer,
} from './header.styled';
import { Spiner } from '../helpers/spiner';
import { ExitModalka } from '../exitModalka/ExitModalka';
import Coin from '../../../assets/svgImage/coin.png';

export const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(logout());
      sessionStorage.removeItem('userData');
      navigate('/login');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Conatiner>
        <Logo>
          Budget B
          <img src={Coin} alt="Coin" width="20" height="20" />
          ss
        </Logo>
        {isAuthenticated && (
          <ExitModalka user={user} handleClick={handleClick} />
        )}
      </Conatiner>

      <SpinerContainer>{isLoading && <Spiner />}</SpinerContainer>
    </>
  );
};
