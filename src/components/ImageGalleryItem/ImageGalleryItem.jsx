import './ImageGalleryItem.css';
import Modal from '../Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };

    onModal = () => { 
        this.setState(({ showModal }) => ({ showModal: !showModal }));
    };

    render() {
        const { item } = this.props;
        const { webformatURL } = item;
        return (

            <li className="ImageGalleryItem">
                <img
                    onClick={this.onModal}
                    className="ImageGalleryItem-image"
                    src={webformatURL}
                    alt="img"
                />
                {this.state.showModal && <Modal onClose={this.onModal} image={item} />}
            </li >
        );
    }
}

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
};

export default ImageGalleryItem;