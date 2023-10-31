import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, onOpenModal }) => {
    return (
      <ul className="gallery">
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            {...image}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    );
  }



