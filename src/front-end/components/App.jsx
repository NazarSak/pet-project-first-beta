import { Route, Routes } from 'react-router-dom';
import { Home } from 'front-end/pages/home/Home';
import { Login } from 'front-end/pages/LogIn/LogIn';
import { Register } from 'front-end/pages/Register/Register';
import { Layout } from './layout/Layout';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};