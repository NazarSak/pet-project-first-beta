import { NavLink, Outlet } from 'react-router-dom';
import { Header } from '../header/Header';


export const Layout = () => {
  return (
    <nav>
      <Header/>
{/* <NavLink to="/register" >Registration </NavLink> */}

      {/* <NavLink to="/" style={({ isActive }) => ({ className: isActive ? 'active-btn' : '' })}>
        HomePage
      </NavLink> */}

      {/* <NavLink to="/workPage" style={({ isActive }) => ({ className: isActive ? 'active-btn' : '' })}>
        Workpage
      </NavLink>

      <NavLink to="/contactPage" style={({ isActive }) => ({ className: isActive ? 'active-btn' : '' })}>
        ContactPage
      </NavLink> */}

      <Outlet />
    </nav>
  );
};


