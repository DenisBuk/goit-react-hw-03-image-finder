import './Searchbar.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Searchbar extends Component {
    
    state = {
        imageSearch: '',
    };

    handleNameChange = event => {
        this.setState({ imageSearch: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.imageSearch.trim() === '') { 
            toast('Enter your request');
            return;
        }
        this.props.onSubmit(this.state.imageSearch);
        this.setState({ imageSearch: '' });
    };

    render() {
        
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.props.onSubmit}>
                    <button
                        type="submit"
                        className="SearchFormButton"
                        onClick={ this.handleSubmit}
                    >
                        <span className="SearchbarButtonLabel">Search</span>
                    </button>

                    <input
                        className="SearchFormInput"
                        name="imageSearch"
                        value={this.state.imageSearch}
                        onChange={ this.handleNameChange}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                       />
                </form>
            </header>
        );
    }
}


Searchbar.proppType = {
    onSubmit: PropTypes.func.isRequired,
    imageSearch: PropTypes.string,
};