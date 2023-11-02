import styled from 'styled-components';


const GalleryItem = styled.li`
  width: calc(25vw - 16px); /* 25% szerokości ekranu - 16px odstępu między obrazami */
  margin: 0;
  padding: 0;
  list-style: none;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onOpenModal }) => {
  return (
    <GalleryItem className="gallery-item" onClick={() => onOpenModal(largeImageURL)}>
      <GalleryImage src={webformatURL} alt={`${id}`} />
    </GalleryItem>
  );
};

// export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onOpenModal }) => {
//     return (
//       <li className="gallery-item" onClick={() => onOpenModal(largeImageURL)}>
//         <img src={webformatURL} alt={`${id}`} />
//       </li>
//     );
//   };