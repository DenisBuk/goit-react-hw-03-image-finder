import './ImageGalleryItem.css';


export default function ImageGalleryItem({ id, tags, smallImage, largeImage, onClickItem }){
   return(
       <li key={id} className="ImageGalleryItem">
                <img
               className="ImageGalleryItem-image"
               src={smallImage}
               alt={tags}
               data-source={largeImage}
               onClick={() => { onClickItem(largeImage)} }
                />
            </li >
        );
}