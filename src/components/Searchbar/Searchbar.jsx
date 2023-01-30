import './Searchbar.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = event => {
    this.setState({ searchQuery: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please enter a value to search!');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchFormButton">
            <span className="SearchbarButtonLabel">Search</span>
          </button>

          <input
            className="SearchFormInput"
            onChange={this.handleChange}
            value={searchQuery}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos" />
        </form>
      </header>
    ); 
  }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};