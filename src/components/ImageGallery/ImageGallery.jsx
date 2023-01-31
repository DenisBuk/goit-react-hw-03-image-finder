import  ImageGalleryItem  from '../ImageGalleryItem';
import { ImageGalleryList} from './ImageGallery.syled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onOpenModal}) => (
            <ImageGalleryList>
        {images.map(({ id, webformatURL, largeImageURl, tags}) => (   
                <ImageGalleryItem
                key={id}
                url={webformatURL}
                largeImageURl={largeImageURl}
                tag={tags}
                openModal={onOpenModal} 
                    />
                ))}
            </ImageGalleryList>
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

