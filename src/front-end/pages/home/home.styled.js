import styled from 'styled-components';

export const Title = styled.h2`
  color: #fff;
  font-family: Roboto;
  font-size: 64px;
  font-weight: 400;
  letter-spacing: 2.56px;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #383847;
`;

export const ToLogin = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  border-radius: 16px;
  background: var(--button, #42a652);
  box-shadow: 1px 3px 5px 0px rgba(96, 196, 112, 0.35);
  padding: 15px 48px;
  border: none;
  cursor: pointer;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

