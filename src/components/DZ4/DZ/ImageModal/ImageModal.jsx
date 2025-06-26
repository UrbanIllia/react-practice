import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ data, onRequestClose, isOpen }) => {
  if (!data) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="overlay fixed top-0 left-0 right-0 bottom-0 bg-[rgba(15,32,39,0.9)] flex items-center justify-center"
      className="modal max-w-[90%] max-h-[90vh] bg-gradient-to-bl from-[#2c5364] via-[#203a43] to-[#0f2027] rounded-xl p-5 outline-none shadow-lg overflow-auto"
    >
      <div className="w-full h-full flex flex-col items-center">
        <img
          src={data.urls.regular}
          alt={data.alt_description || "Image"}
          className="max-w-full max-h-[calc(80vh-40px)] object-contain rounded-2xl border-4"
          style={{ borderColor: data.color || "#D3D3D3" }}
        />
        <div className="mt-4 text-white text-center flex flex-col justify-center align-center gap-2">
          <p>
            Description:{" "}
            <span className="text-emerald-600">{data.alt_description}</span>
          </p>
          <p>
            User:{" "}
            <span className="text-emerald-600">{data.user.first_name}</span>
          </p>
          <p>
            Location of user:{" "}
            <span className="text-emerald-600">{data.user.location}</span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
