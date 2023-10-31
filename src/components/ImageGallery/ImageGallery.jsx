import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, onOpenModal }) => {
    return (
      <ul className="gallery">
        {images.map((image, index) => (
          <ImageGalleryItem
          key={`${image.id}_${index}`}
            {...image}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    );
  }



