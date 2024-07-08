import css from "./ImageModal.module.css";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

type Props = {
  selectedImg: { urls: { regular: string }; alt_description: string };
  modalIsOpen: boolean;
  onIsCloseModal: () => void;
};

function ImageModal({ selectedImg, modalIsOpen, onIsCloseModal }: Props) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onIsCloseModal}
        style={customStyles}
      >
        <div>
          <img
            src={selectedImg.urls.regular}
            alt={selectedImg.alt_description}
          />
        </div>
      </Modal>
    </>
  );
}

export default ImageModal;
