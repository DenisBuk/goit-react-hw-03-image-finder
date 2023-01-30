import { Overlay, ModalWindow } from'./Modal.styled';
import PropTypes from 'prop-types';
import { Component  } from 'react';

export class Modal extends Component {

    componentDidMount() { 
        window.addEventListener('keydown, this.onKeyDown');
    }

    componentWillUnmount() { 
        window.removeEventListener('keydown, this.onKeyDown');
    }

    onKeyDown = event => { 
        if (event.code === event.currentTarget) { 
            this.props.onModalClick();
        }
    };

    onBackDropClick = event => {
        if (event.target === event.currentTarget) {
            this.props.onModalClick();
        }
    };

    render() { 
        const { largeImage, alt } = this.props;

        return (
            <Overlay onClick={this.onBackDropClick}>
                <ModalWindow>
                    <img src={largeImage} alt={alt} />
                    </ModalWindow>
            </Overlay>
        );
    }
 }

Modal.propTypes = {
    largeImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onModalClick: PropTypes.func.isRequired,
};