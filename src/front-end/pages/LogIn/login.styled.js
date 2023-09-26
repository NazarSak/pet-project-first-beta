import styled from 'styled-components';
import EllipseGreen from '../../../assets/svgImage/01-home.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 49px;
  background-image: url(${EllipseGreen});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #383847;
`;

export const StyledForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background: #383847;
  box-shadow: 0px 2px 14px 0px rgba(132, 132, 132, 0.2) inset;

  @media screen and (min-width: 768px) {
    margin-top: -11px;
    width: 500px;
    padding: 50px;
  }
`;

export const StyledField = styled.input`
  padding: 16px 159px 16px 16px;
  border: none;
  border-radius: 16px;
  background: #f6f7fb;
  color: #a6abb9;
  font-size: 14px;
  letter-spacing: 0.56px;
  outline: none;
  margin-top: 8px;
`;

export const List = styled.ul`
  gap: 34px;
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  list-style: none;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const BeforeGoogleParagraph = styled.p`
  color: #f6f7fb;
  text-align: center;
  max-width: 218px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.64px;
  margin-bottom: 20px;
`;

export const UnderGoogleParagraph = styled.p`
  color: var(--color-text, #f6f7fb);
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.56px;
  max-width: 288px;
  margin-bottom: 31px;
`;

export const ToGoogleButton = styled.button`
  display: flex;
  padding: 10px 18px 10px 20px;
  align-items: center;
  color: #1f1f27;
  font-size: 14px;
  letter-spacing: 0.28px;
  border-radius: 16px;
  background: #f6f7fb;
  outline: none;
  border: none;
  box-shadow: 1px 3px 5px 0px rgba(255, 255, 255, 0.35);
  margin-bottom: 32px;
`;

export const Span = styled.span`
  margin-right: 9px;
`;
