import './Modal.css';
import React, { Component } from 'react/cjs/react.propduction.min';
import PropTypes from 'prop-types';



export default class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleEscClick);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscClick);
    }

     handleEscClick = event => {
        if (event.code === 'Escape') {
            this.props.closeModal();
        }
    };

     render() {
        const { onClick, image } = this.props;
        return (
            <div className="Overlay"
                onClick={onClick}
                tabIndex="0">
                <div className="Modal">
                    <img src={image} alt={image.tags} />
                </div>
            </div>
        );
    }
};



Modal.propTypes = {
    onClick: PropTypes.func,
    image: PropTypes.string.isRequired,
    closeModal: PropTypes.func,
};