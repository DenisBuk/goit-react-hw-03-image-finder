import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';


export default function ImageGallery({ images, toggleModal}) { 
    return (
            <ul classname={ImageGallery}>
            {images.map(({id, tags, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    tags={tags}
                    smallImage={webformatURL}
                    largeImage={largeImageURL}
                    onClickItem={() => { toggleModal(largeImageURL)}}
                />
                ))}
            </ul>
    );
}
