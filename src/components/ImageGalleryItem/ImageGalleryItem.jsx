import './ImageGallery.css';
import Modal from '../Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ImageGallertItem  extends Component {
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

            <li className="ImageGallertItem">
                <img
                    onClick={this.onModal}
                    className="ImageGallertItem-image"
                    src={webformatURL}
                    alt={img}
                />
                {this.state.showModal && <Modal onClose={this.onModal} image={item} />}
            </li >
        );
    }
}

ImageGallertItem.propTypes = {
    item: PropTypes.object,
};

export default ImageGallertItem;