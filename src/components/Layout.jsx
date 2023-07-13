import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavBar } from './NavBar/NavBar';

export const Layout = () => {
  return (
    <div className="container">
      <NavBar />
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </div>
  );
};
