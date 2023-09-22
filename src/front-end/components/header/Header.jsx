import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Audio } from 'react-loader-spinner';
import { logout } from 'front-end/redux/auth.js/authSlice';
import { Conatiner, Logo, ExitButton, ExitContainer } from './header.styled';
import Coin from '../../../assets/svgImage/coin.png';

export const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(logout());
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Conatiner>
      <Logo>
        Budget B
        <img src={Coin} alt="Coin" width="20" height="20" />
        ss
      </Logo>
      {isAuthenticated && (
        <ExitContainer>
          {isLoading && (
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          )}
          <Logo>Welcome:{user}</Logo>
          <ExitButton onClick={handleClick}> Exit</ExitButton>
        </ExitContainer>
      )}
    </Conatiner>
  );
};
