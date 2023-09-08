import { AiOutlineCloseCircle } from 'react-icons/ai';

interface IModalProps {
  imageSource: string;
  handleModalClose: () => void;
}

const Modal: React.FC<IModalProps> = (props) => {
  const { imageSource, handleModalClose } = props;
  return (
    <div className="modalContainerDiv">
      <button onClick={handleModalClose} className="closeButton">
        <AiOutlineCloseCircle />
      </button>
      <img src={imageSource} alt="image" className="modalImage" />
    </div>
  );
};

export default Modal;
