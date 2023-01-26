import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallertItem = ({
    images,
    handleModalImage,
    handleModalAlt,
    showModal,
 }) => {
    return (
        <>
            {images.map(image => (
                <li
                    key={image.id}
                    className={css.ImageGallertItem}
                    onClick={showModal}
                >
                    <img
                        src={image.webformatURL}
                        alt={image.tags}
                        className={css.ImageGallertItemimage}
                        onClick={() => {
                            handleModalImage(image.largeImageURL);
                            handleModalAlt(image.tags);
                        }}
                    />
                </li >
            ))}
                </>
    );
};