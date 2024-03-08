import './profile.css';

interface IProps {
  image: string;
}

const Profile: React.FC<IProps> = ({ image }: IProps) => (
  <div className="profile">
    <img
      alt="profile"
      src={image}
    />
  </div>
);

export default Profile;
