import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicLayout } from '../pages/Layouts/PublicLayout';
import { Home } from '../pages/public/Home';
import About from '../pages/public/About';
import Markets from '../pages/public/Markets';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path='404' element={<div>Página no encontrada</div>} />
        <Route path='about' element={<About />} />
        <Route path='markets' element={<Markets />} />
      </Route>

      <Route path='*' element={<Navigate to='/404' replace />} />
    </Routes>
  );
};
