import {
  Box
} from "@chakra-ui/react";
import Modal from 'react-modal';



import AppConst from "../../constants/AppConstants";
const commonModal = (props) => {
  const { isOpen, onOpen, onClose,width,height,top } = props;
  return (
    <Box>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(125, 124, 125, 0.7)',
            zIndex : 999999
          },
          content: {
            position:'absolute',
            top : top,
            left:0,
            right:0,
            marginLeft:'auto',
            marginRight:'auto',
            backgroundColor: '#fff',
            
            WebkitOverflowScrolling: 'touch',
            borderRadius: '30px',
             padding: '20px',
            width :width,
            height : height
            
          }
        }}
        contentLabel="Example Modal"
      >

      {props.children}
      </Modal>
    </Box>
  );
};


export default commonModal;
