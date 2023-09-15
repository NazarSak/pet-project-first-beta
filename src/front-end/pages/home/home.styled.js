import styled from 'styled-components';
import backgroundSvg from '../../../assets/svgImage/Rectangle.png';

export const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: Roboto;
  font-size: 64px;
  font-weight: 400;
  letter-spacing: 2.56px;
  text-transform: uppercase;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #383847;
  position: relative;
  overflow: hidden;
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

