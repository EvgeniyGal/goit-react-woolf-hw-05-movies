import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
// import HomePage from 'pages/HomePage';
import MoviesDetailPage from 'pages/MoviesDetailsPage';
// import { Suspense } from 'react';
// import CastPage from 'pages/CastPage';
// import ReviewsPage from 'pages/ReviewsPage';
// import MoviesPage from 'pages/MoviesPage';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const CastPage = lazy(() => import('pages/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>

        <Route path="*" element={'Notfound'} />
      </Routes>
    </>
  );
};
