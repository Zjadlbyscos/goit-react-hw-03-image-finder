export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onOpenModal }) => {
    return (
      <li className="gallery-item" onClick={() => onOpenModal(largeImageURL)}>
        <img src={webformatURL} alt={`Image ${id}`} />
      </li>
    );
  };