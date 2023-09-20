import { Route, Routes,Navigate  } from 'react-router-dom';
import { Home } from 'front-end/pages/home/Home';
import { Login } from 'front-end/pages/LogIn/LogIn';
import { Layout } from './layout/Layout';
import Dashboard from 'front-end/pages/dashboard/dashboard';
import { useSelector } from 'react-redux';

export const App = () => {

  const ProtectedRoute = ({ element }) => {
    const isAuthenticatedUser = useSelector(state => state.auth.isAuthenticated);
  
    return isAuthenticatedUser ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute element={<Dashboard />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
