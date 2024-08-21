import Modal from 'react-modal';

const ImageModal = ({ isOpen, onRequestClose, image }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    shouldCloseOnOverlayClick
    onRequestClose={onRequestClose}
    ariaHideApp={false}
  >
    <img src={image?.url} alt={image?.alt} />
    <button onClick={onRequestClose}>Close</button>
  </Modal>
);

export default ImageModal;
