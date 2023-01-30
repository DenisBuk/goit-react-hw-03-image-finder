import './ImageGalleryItem.css';
import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ url, tag, openModal, largeImageURL }) => (
    <li className="ImageGalleryItem">
                <img
            className="ImageGalleryItem-image"
            src={url}
            alt={tag}
            onClick={() =>  openModal(largeImageURL, tag )}
                />
            </li>
        );

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};
