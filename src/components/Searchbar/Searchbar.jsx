import {
  SearchbarHeader,
  SearchFrom,
  SearchFormButton,
  SearchFormButtonLabel,
SearchFormInput,} from './Searchbar.styled';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { BiSearchAlt} from 'react-icons/bi'

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
      <SearchbarHeader>
        <SearchFrom onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BiSearchAlt style={{ width: 25, height: 25}}/>
          </SearchFormButton>

          <SearchFormButtonLabel>
            <SearchFormInput
            onChange={this.handleChange}
            value={searchQuery}
            type="text"
            autocomplete="off"
            autofocus
              placeholder="Search images and photos"
            />
          </SearchFormButtonLabel>
        </SearchFrom>
      </SearchbarHeader>
    ); 
  }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};