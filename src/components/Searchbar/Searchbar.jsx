import './Searchbar.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Searchbar extends Component {
    
    state = {
        searchImage: '',
    };

    handleImageChange = event => {
        this.setState({ searchImage: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchImage.trim() === '') {
            return alert('Please, enter image name.');
        }

        this.props.onSubmit(this.state.searchImage);
    };

    render() {
        return (
            <header className={css.Searchbar}>
                <h1 className="visually-hidden">images gallery</h1>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <label htmlFor="searchInput"></label>
                    <input
                        id="searchInput"
                        type="text"
                        name="image"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        value={this.state.searchImage}
                        className={css.SearchFormInput}
                        onChange={this.handleImageChange}
                    ></input>
                    <button type="submit" className={css.SearchFormButton}>
                        <FcSearch size={30} />
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>
                </form>
            </header>
        );
    }
}