import { Route, Routes } from 'react-router-dom';
import { Homepage } from 'front-end/pages/homepage/Homepage';
import { Workpage } from 'front-end/pages/workpage/WorkPage';
import { Layout } from './layout/Layout';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="workPage" element={<Workpage />} />
         
        </Route>
      </Routes>
    </>
  );
};
