import './ImageGalleryItem.css';
import propTypes from 'prop-types';


export const ImageGalleryItem = ({ image, onClick }) => (
    <li className="ImageGalleryItem" id={image.id} onClick={onClick}>
                <img
               className="ImageGalleryItem-image"
               src={image.webformatURL}
               alt={image.tags}
               name={image.largeImageURL}
                />
            </li >
        );

ImageGalleryItem.propTypes = {
    image: propTypes.object.isRequired,
    onClick: propTypes.func.isRequired,
};

export default ImageGalleryItem;