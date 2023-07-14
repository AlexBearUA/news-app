import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div className="container">
      <AppBar />
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </div>
  );
};
