import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';
import propTypes from 'prop-types';

export const ImageGallery = ({ images, toggleModal}) => (
            <ul classname={ImageGallery}>
                {images.map((image, index) =>(   
                <ImageGalleryItem
                        onClick={onImageClick}
                        image={image}
                        key={index}
                    />
                ))}
            </ul>
);
    
ImageGallery.propTypes = {
    images: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
        })
    ),
    onImageClick: propTypes.func.isRequired,
};

