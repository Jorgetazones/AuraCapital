import { Outlet } from 'react-router-dom';
import Navbar from '../public/components/Navbar';

export const PublicLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-aura-dark'>
      <Navbar />

      <main className='grow'>
        <Outlet />
      </main>

      <footer className='p-4 text-center text-gray-500 border-t border-white/5'>
        © 2026 Aura Capital
      </footer>
    </div>
  );
};
