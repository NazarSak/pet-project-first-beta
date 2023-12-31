import styled from 'styled-components';

export const Conatiner = styled.div`
  background: #1f1f27;
  box-shadow: 0px 7px 24px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 0 8px 40px;
   z-index: 1000; 
`;

export const Logo = styled.h3`
  font-family: Nunito;
  font-size: 29px;
  font-weight: 400;
  background: linear-gradient(
    180deg,
    #60c470 50%,
    rgba(96, 196, 112, 0) 107.5%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

export const SpinerContainer = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
