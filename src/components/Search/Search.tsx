import './search.css';

interface IProps {
  placeholder: string;
}

const Search = ({ placeholder }: IProps) => (
  <input
    className="search"
    placeholder={placeholder}
  />
);

export default Search;
