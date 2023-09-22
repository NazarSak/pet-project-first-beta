import styled from 'styled-components';

export const Conatiner = styled.div`
  background: #1f1f27;
  box-shadow: 0px 7px 24px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 0 8px 40px;
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

export const ExitButton = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  border-radius: 16px;
  background: var(--button, #42a652);
  box-shadow: 1px 3px 5px 0px rgba(96, 196, 112, 0.35);
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  margin-right: 56px;
`;

export const ExitContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SpinerContainer = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;
