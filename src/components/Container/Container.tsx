import './container.css';

interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }: IProps) => (
  <div className="container">{children}</div>
);
export default Container;
