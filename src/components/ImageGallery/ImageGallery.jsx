import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onOpenModal}) => (
            <ul classname={ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURl, tags}) => (   
                <ImageGalleryItem
                key={id}
                url={webformatURL}
                largeImageURl={largeImageURl}
                tag={tags}
                openModal={onOpenModal} 
                    />
                ))}
            </ul>
);
    
ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURl: PropTypes.string.isRequired,
        })
    ).isRequired,
    onOpenModal: PropTypes.func.isRequired,
};

