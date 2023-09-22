import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from 'front-end/pages/home/Home';
import { Login } from 'front-end/pages/LogIn/LogIn';
import { Layout } from './layout/Layout';
import Dashboard from 'front-end/pages/dashboard/dashboard';
import { useDispatch } from 'react-redux';
import { isAutorized } from 'front-end/redux/auth.js/authSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    const userNameDataString = localStorage.getItem('userNameData');
    if (userDataString) {
      dispatch(isAutorized(userNameDataString));
    }
    // eslint-disable-next-line
  }, []);

  const ProtectedRoute = ({ element }) => {
    const userDataString = localStorage.getItem('userData');
    return userDataString ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
        </Route>
      </Routes>
    </>
  );
};
