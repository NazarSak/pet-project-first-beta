import styled from "styled-components";

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
  cursor: pointer;
  margin-right: 56px;
`;

export const ModalWrapper = styled.div`
  /* display: ${(props) => (props.open ? 'flex' : 'none')}; */
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

export  const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;