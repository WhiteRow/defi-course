import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./home'));
const ErrorPage = lazy(() => import('./error'));

export const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
};
