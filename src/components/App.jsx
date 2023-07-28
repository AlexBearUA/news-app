import { Route, Routes } from 'react-router-dom';
import { lazy, createContext, useState, useEffect } from 'react';
import { Layout } from './Layout';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import { LIGHT } from './constants';

const Home = lazy(() => import('../pages/Home/Home'));
const Favorite = lazy(() => import('../pages/Favorite/Favorite'));
const Read = lazy(() => import('../pages/Read/Read'));

export const ThemeContext = createContext();

export const App = () => {
  const [theme, setTheme] = useState(
    () => JSON.parse(window.localStorage.getItem('news-theme')) ?? LIGHT
  );

  useEffect(() => {
    window.localStorage.setItem('news-theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/read" element={<Read />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeContext.Provider>
  );
};
