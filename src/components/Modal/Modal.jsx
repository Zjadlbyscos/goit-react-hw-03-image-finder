import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Modal = ({ largeImageURL, onCloseModal }) => {
  return (
    <Overlay onClick={onCloseModal}>
      <ModalContainer>
        <ModalImage src={largeImageURL} alt="Modal" />
      </ModalContainer>
    </Overlay>
  );
};

// export const Modal = ({ largeImageURL, onCloseModal }) => {
//     return (
//       <div className="overlay" onClick={onCloseModal}>
//         <div className="modal">
//           <img src={largeImageURL} alt="Modal" />
//         </div>
//       </div>
//     );
//   };