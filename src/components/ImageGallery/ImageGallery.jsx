import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styled from 'styled-components';

const GalleryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 1vw;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: space-between;
  justify-content: center;
`;

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <GalleryList className="gallery">
      {images.map((image, index) => (
        <ImageGalleryItem
          key={`${image.id}_${index}`}
          {...image}
          onOpenModal={onOpenModal}
        />
      ))}
    </GalleryList>
  );
};

// ImageGallery = ({ images, onOpenModal }) => {
//     return (
//       <ul className="gallery">
//         {images.map((image, index) => (
//           <ImageGalleryItem
//           key={`${image.id}_${index}`}
//             {...image}
//             onOpenModal={onOpenModal}
//           />
//         ))}
//       </ul>
//     );
//   }
