import styled from 'styled-components';
import backgroundSvg from '../../../assets/svgImage/Rectangle.png';

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

export const ToRegister = styled.button`
  color: #1f1f27;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  padding: 15px 24px;
  border-radius: 16px;
  background: #f5f6fb;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
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

export const ContainerImage = styled.div`
  /* width: 100%;
  height: 100vh; */
  /* background-image: url(${backgroundSvg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; */
  /* width: 1695.176px; */
  /* height: 1330.115px;
  transform: rotate(-15deg); */
  /* flex-shrink: 0; */
`;
