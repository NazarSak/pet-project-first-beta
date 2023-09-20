import { Route, Routes } from 'react-router-dom';
import { Home } from 'front-end/pages/home/Home';
import { Login } from 'front-end/pages/LogIn/LogIn';
import { Layout } from './layout/Layout';
import Dashboard from 'front-end/pages/dashboard/dashboard';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};
