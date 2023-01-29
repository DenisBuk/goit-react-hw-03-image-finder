import './Searchbar.css';
import PropTypes from 'prop-types';


export const Searchbar = ({ onSubmit}) => (
    
 <header className="Searchbar">
  <form className="SearchForm" onSubmit={onSubmit}>
    <button type="submit" className="SearchFormButton">
      <span className="SearchbarButtonLabel">Search</span>
    </button>

     <input
        className="SearchFormInput"
        name="imageSearch"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"/>
                </form>
            </header>
        );

Searchbar.proppType = {
    onSubmit: PropTypes.func.isRequired,
};