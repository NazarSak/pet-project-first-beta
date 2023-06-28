import { Route, Routes } from 'react-router-dom';
import { Homepage } from 'pages/homepage/Homepage.jsx';
import { Workpage } from 'pages/workpage/WorkPage';
import { Layout } from './layout/Layout';
import { ContactPage } from 'pages/contactPage/ContatcPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="workPage" element={<Workpage />} />
          <Route path="contactPage" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};
