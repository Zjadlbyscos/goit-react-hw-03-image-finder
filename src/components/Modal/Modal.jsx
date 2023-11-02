export const Modal = ({ largeImageURL, onCloseModal }) => {
    return (
      <div className="overlay" onClick={onCloseModal}>
        <div className="modal">
          <img src={largeImageURL} alt="Modal" />
        </div>
      </div>
    );
  };