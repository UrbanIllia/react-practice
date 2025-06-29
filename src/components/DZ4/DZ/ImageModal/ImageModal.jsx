import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="max-w-[90%] max-h-[90vh] bg-[linear-gradient(135deg,#2c5364,#203a43,#0f2027)]
       rounded-[12px] p-5 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex justify-center 
      items-center bg-[rgba(15,32,39,0.9)]"
    >
      <div>
        <img src={image.urls.regular} alt="" />
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
