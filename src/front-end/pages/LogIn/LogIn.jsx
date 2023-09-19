import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { validAccounts } from 'front-end/components/UserList';
import { loginAsync } from 'front-end/redux/auth.js/actionCreator';
import { StyledForm } from 'front-end/components/form/form.styled';


export const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Перевіряємо, чи є користувач з таким ім'ям та паролем у списку валідних акаунтів
    const isValidAccount = validAccounts.find(
      (account) => account.username === username && account.password === password
    );

    if (isValidAccount) {
      // Якщо валідний акаунт, виконуємо автентифікацію
      dispatch(loginAsync({ username, password }));
      // Перенаправляємо користувача на іншу сторінку
      // Наприклад, за допомогою React Router
      // history.push('/dashboard'); // Де '/dashboard' - URL іншої сторінки
      console.log("all is good!");
    } else {
      // Якщо не валідний акаунт, можна вивести помилку або виконати інші дії
      console.log('Неправильні дані автентифікації');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ім'я користувача"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Увійти</button>
    </div>
  );
};

// import React from 'react';
// import { Container, Wrapper } from './login.styled';
// import wallet from '../../../assets/svgImage/wallet.png';
// import Form from 'front-end/components/form/Form';

// export const Login = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <img src={wallet} alt="Wallet" width="675" height="545" />
//       </Wrapper>
//      <Form/>
//     </Container>
//   );
// };
