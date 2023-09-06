interface IModalProps {
  imageSource: string;
  handleModalClose: () => void;
}

const Modal: React.FC<IModalProps> = (props) => {
  const { imageSource, handleModalClose } = props;
  return (
    <div>
      <button onClick={handleModalClose}>Close</button>
      <img src={imageSource} alt="image" />
    </div>
  );
};

export default Modal;
