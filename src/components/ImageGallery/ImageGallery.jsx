import { ImageGalleryItems } from '../ImageGalleryItem'; 
import './ImageGellery.css';

function ImageGallery ({ items}) { 
    return (
        <>
            <ul classname={ImageGallery}>
                {items.map(item => (
                    <ImageGalleryItem key={item.id} item={ item} />
                ))}
            </ul>
    </>
    );
}

export default ImageGallery;

ImageGallery.propTypes = {
    items: PropTypes.array,
};