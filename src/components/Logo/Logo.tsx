import LogoIcon from '@/assets/stair.svg?react';

import './logo.css';

interface IProps {
  title: string;
}

const Logo: React.FC<IProps> = ({ title }: IProps) => (
  <div className="logo">
    <LogoIcon
      width={16}
      height={16}
      className="logo__icon"
    />
    <span>{title}</span>
  </div>
);

export default Logo;
