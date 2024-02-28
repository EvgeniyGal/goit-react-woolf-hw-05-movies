import { NavLink, Outlet } from 'react-router-dom';
import './MainLayouts.css';
import { Suspense } from 'react';

function MainLayout() {
  return (
    <>
      <header>
        <nav className="main-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MainLayout;
