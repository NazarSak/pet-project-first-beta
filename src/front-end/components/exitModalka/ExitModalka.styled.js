import styled from 'styled-components';

export const ExitContainer = styled.div`
  display: flex;
  gap: 20px;
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
  margin-right: 56px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #383847;
  padding: 40px 57px;
  border-radius: 16px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #c7ccdc;
`;

export const ButtonAgree = styled.button`
  border-radius: 16px;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.02em;
  padding: 15px 52px;
  border: none;
  box-shadow: 1px 3px 5px 0px #60c47059;
  background: #42a652;
  color: #f6f7fb;
  margin-right: 16px;
`;

export const ButtonDisagree = styled.button`
  border-radius: 16px;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.02em;
  padding: 15px 52px;
  border: none;
  border: 2px solid #474759;
  box-shadow: 0px 4px 7px 0px #00000040;
  background: #383847;
  color: #c7ccdc;
`;

export const ButContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const DaggerSvg = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const Stick = styled.div`
  height: 36px;
  border: 1px solid #e0e5eb;
  color: #e0e5eb;
  margin:0 20px;
`;


