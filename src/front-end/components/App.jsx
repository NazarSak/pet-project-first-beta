import { Route, Routes } from 'react-router-dom';
import { Home } from 'front-end/pages/home/Home';
// import { Workpage } from 'front-end/pages/workpage/WorkPage';
import { Register } from 'front-end/pages/Register/Register';
import { Layout } from './layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="workPage" element={<Workpage />} /> */}
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
