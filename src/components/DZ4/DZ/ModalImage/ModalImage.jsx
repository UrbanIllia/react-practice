import Modal from "react-modal";

Modal.setAppElement("#yourAppElement");

const ModalImage = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className=""
      overlayClassName=""
    >
      <img
        src={image.urls.full}
        alt={image.alt_description || "Image"}
        className=""
      />
    </Modal>
  );
};

export default ModalImage;
