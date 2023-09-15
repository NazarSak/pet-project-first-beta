import React from 'react';
import { Conatiner, Logo, CoinLogo } from './header.styled';
import Coin from '../../../assets/svgImage/coin.png';

export const Header = () => {
  return (
    <Conatiner>
      <Logo>
        Budget B
        <CoinLogo>
          <img src={Coin} alt="Coin" width="20" height="20" />
        </CoinLogo>
        ss
      </Logo>
    </Conatiner>
  );
};
