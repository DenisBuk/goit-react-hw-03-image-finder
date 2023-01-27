import './Searchbar.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ImSearch } from 'react-icons/im';
class Searchbar extends Component {

    
    state = {
        inputData: '',
    };

    onChange = event => {
        this.setState({ inputData: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputData);
        this.setState({ inputData: '' });
    };

    render() {
        const { inputData } = this.state.inputData;
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchFormButton">
                        <ImSearch size={25} />
                    </button>

                    <input
                        className="SearchFormInput"
                        name="inputData"
                        value={inputData}
                        onChange={ this.onChangeInput}
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
export default Searchbar;
Searchbar.proppType = {
    onSubmit: PropTypes.func.isRequired,
};