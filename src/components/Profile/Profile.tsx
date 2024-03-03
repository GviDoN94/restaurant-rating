import './profile.css';

interface IProps {
  image: string;
}

const Profile = ({ image }: IProps) => (
  <div className="profile">
    <img
      alt="profile"
      src={image}
    />
  </div>
);

export default Profile;
