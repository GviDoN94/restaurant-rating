import LogoIcon from '@/assets/stair.svg?react';

import './logo.css';

const Logo = () => (
  <div className="logo">
    <LogoIcon
      width={16}
      height={16}
      className="logo__icon"
    />
    <span>Eats</span>
  </div>
);

export default Logo;
