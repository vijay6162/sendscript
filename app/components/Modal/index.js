import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Styles from "../../../styles/modal.module.css"; 


const commonModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center={true}
      classNames={{
        modal: Styles.customModal,
      }}
    >
      {props.children}
    </Modal>
  );
};

export default commonModal;
