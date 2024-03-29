import './search.css';

interface IProps {
  placeholder: string;
  search: (name: string) => void;
}

const Search: React.FC<IProps> = ({ placeholder, search }: IProps) => (
  <input
    className="search"
    placeholder={placeholder}
    onChange={({ target }) => search(target.value)}
  />
);

export default Search;
