import './Modal.css';
import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


const ModalRoot = document.querySelector('#Modalroot');
 class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.KeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.KeyDown);
    }

     KeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

   onOverlayClose = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

     render() {
        const { largeImageURL } = this.props.image;
        return createPortal(
            <div onClick={this.onOverlayClose} className={this.Overlay}>
                <div className="Modal">
                    <img src={ largeImageURL} alt="img" />
                </div>
            </div>,
            ModalRoot
        );
    }
};

export default Modal;

Modal.propTypes = {
    image: PropTypes.object,
    onClose: PropTypes.func,
};