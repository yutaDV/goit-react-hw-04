
import{ useState } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query.');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.searchBoxContainer}>
      <form onSubmit={handleSubmit}>
        <div className={css.formContainer}>
        <button className={css.formBtm} type="submit">🔍</button>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.formInput} 
          />
          </div>
      </form>
    </header>
  );
};

export default SearchBar;
