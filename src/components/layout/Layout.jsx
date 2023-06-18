import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <nav>
      <NavLink to="/">
        <button>HomePage</button>
      </NavLink>

      <NavLink to="/workPage">
        <button>Workpage</button>
      </NavLink>

      <NavLink to="/contactPage">
        <button>ContactPage</button>
      </NavLink>

      <Outlet />
    </nav>
  );
};
