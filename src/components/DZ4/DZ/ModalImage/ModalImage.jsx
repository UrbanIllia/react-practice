import Modal from "react-modal";
Modal.setAppElement("#root");

const ModalImage = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <img src={image.urls.full} alt={image.description || "Image"} />
    </Modal>
  );
};

export default ModalImage;
