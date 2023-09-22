import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FidgetSpinner } from 'react-loader-spinner';
import { logout } from 'front-end/redux/auth.js/authSlice';
import { Conatiner, Logo, ExitButton, ExitContainer,SpinerContainer } from './header.styled';
import Coin from '../../../assets/svgImage/coin.png';

export const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(logout());
      localStorage.removeItem('userData');
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
          <ExitContainer>
            <Logo>Welcome:{user}</Logo>
            <ExitButton onClick={handleClick}> Exit</ExitButton>
          </ExitContainer>
        )}
      </Conatiner>

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
    </>
  );
};
