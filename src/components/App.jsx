import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const Favorite = lazy(() => import('../pages/Favorite/Favorite'));
const Read = lazy(() => import('../pages/Read/Read'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/read" element={<Read />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
