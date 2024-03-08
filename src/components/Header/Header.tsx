import Logo from '@/components/Logo';
import Profile from '@/components/Profile';

import './header.css';

const Header: React.FC = () => (
  <header>
    <Logo title="Eats" />
    <Profile image="/avatar.png" />
  </header>
);

export default Header;
