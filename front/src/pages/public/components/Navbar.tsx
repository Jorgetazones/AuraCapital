import { NavLink } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Stats', path: '/stats' },
    { name: 'Markets', path: '/markets' },
    { name: 'About', path: '/about' },
    { name: 'New Invests', path: '/new-invest' },
  ];

  return (
    <nav className='sticky top-0 z-50 bg-aura-dark/80 backdrop-blur-md border-b border-white/5 text-white p-4 shadow-lg'>
      <div className='flex items-center justify-between container mx-auto'>
        <div className='text-aura-gold font-bold text-xl'>Aura Capital</div>

        <ul className='flex gap-x-6'>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? 'text-yellow-500' : 'text-white'}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
