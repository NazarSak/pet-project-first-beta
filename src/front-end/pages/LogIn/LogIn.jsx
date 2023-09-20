import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { validAccounts } from 'front-end/components/UserList';
import { loginAsync } from 'front-end/redux/auth.js/actionCreator';
import {
  StyledForm,
  List,
  StyledField,
  BeforeGoogleParagraph,
  ToGoogleButton,
  Span,
  UnderGoogleParagraph,
} from './login.styled';
import { ToLogin } from '../home/home.styled';
import { Container, Wrapper } from './login.styled';
import wallet from '../../../assets/svgImage/wallet.png';
import googleLogo from '../../../assets/svgImage/google.svg';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const isValidAccount = validAccounts.find(
      account => account.username === username && account.password === password
    );

    if (isValidAccount) {
      dispatch(loginAsync({ username, password }));
      navigate('/dashboard');
      console.log('all is good!');
    } else {
      console.log('Неправильні дані автентифікації');
    }
  };

  return (
    <Container>
      <Wrapper>
        <img src={wallet} alt="Wallet" width="675" height="545" />
      </Wrapper>
      <StyledForm action="">
        <BeforeGoogleParagraph>
          You can log in with your Google Account:
        </BeforeGoogleParagraph>
        <ToGoogleButton type="submit">
          <Span>
            <img src={googleLogo} alt="Logo" width="17" height="18" />
          </Span>
          Google
        </ToGoogleButton>

        <UnderGoogleParagraph>
          Or log in using an email and password, after registering:
        </UnderGoogleParagraph>
        <List>
          <li>
            <div>
              <StyledField
                type="text"
                placeholder="Ім'я користувача"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
          </li>
          <li>
            <div>
              <StyledField
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </li>
          <ToLogin type="submit" onClick={handleLogin}>
            Увійти
          </ToLogin>
        </List>
      </StyledForm>
    </Container>
  );
};


// import React from 'react';
// import { Formik, ErrorMessage } from 'formik';
// import {
//   StyledForm,
//   StyledField,
//   List,
//   Label,
//   UnderGoogleParagraph,
//   BeforeGoogleParagraph,
//   ToGoogle,
//   Span,
// } from './form.styled';
// import { ToLogin } from 'front-end/pages/home/home.styled';
// import googleLogo from '../../../assets/svgImage/google.svg';

// const Form = ({ initialValues, validationSchema, handleSubmit }) => {
//   return (
//     <div>
//       <div>
//         <Formik
//           initialValues={{ username: '', password: '' }}
//           validate={values => {
//             const errors = {};
//             return errors;
//           }}
//           onSubmit={handleSubmit}
//         >          
//             <StyledForm>
//               <BeforeGoogleParagraph>
//                 You can log in with your Google Account:
//               </BeforeGoogleParagraph>
//               <ToGoogle type="submit">
//                 <Span>
//                   <img src={googleLogo} alt="Logo" width="17" height="18" />
//                 </Span>
//                 Google
//               </ToGoogle>

//               <UnderGoogleParagraph>
//                 Or log in using an email and password, after registering:
//               </UnderGoogleParagraph>
//               <List>
//                 <li>
//                   <div>
//                     <ErrorMessage name="name">asdasd</ErrorMessage>
//                     <Label>Name:</Label>
//                     <StyledField
//                       type="text"
//                       id="name"
//                       name="name"
//                       placeholder="Name"
//                     />
//                   </div>
//                 </li>
//                 <li>
//                   <div>
//                     <ErrorMessage name="password"></ErrorMessage>
//                     <Label>Password:</Label>
//                     <StyledField
//                       type="email"
//                       id="password"
//                       name="password"
//                       placeholder="Password"
//                     />
//                   </div>
//                 </li>
//               </List>
//               <ToLogin type="submit">Log in</ToLogin>
//             </StyledForm>   
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Form;