import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css'

export const Layout = () => {
  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => ({ className: isActive ? 'active-btn' : '' })}>
        HomePage
      </NavLink>

      <NavLink to="/workPage" style={({ isActive }) => ({ className: isActive ? 'active-btn' : '' })}>
        Workpage
      </NavLink>

      <NavLink to="/contactPage" style={({ isActive }) => ({ className: isActive ? 'active-btn' : '' })}>
        ContactPage
      </NavLink>

      <Outlet />
    </nav>
  );
};

// export const Layout = () => {
//   return (
//     <nav>
//       <NavLink to="/">
//         <button>HomePage</button>
//       </NavLink>

//       <NavLink to="/workPage" >
//         <button>Workpage</button>
//       </NavLink>

//       <NavLink to="/contactPage">
//         <button>ContactPage</button>
//       </NavLink>

//       <Outlet />
//     </nav>
//   );
// };

