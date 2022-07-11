import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from "@chakra-ui/react";
import AppConst from "../../constants/AppConstants";
const commonModal = (props) => {
  const { isOpen, onOpen, onClose } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
        <ModalOverlay />
        <ModalContent borderRadius={25}>
          <ModalHeader  paddingBottom={0}>
            <Text
              fontFamily={"Poppins"}
              fontWeight="semibold"
              fontSize={"23px"}
             
            >
              {AppConst.AddItem}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.children}</ModalBody>
          <ModalFooter>
            <Button
              variant={"outline"}
              mr={3}
              onClick={onClose}
              borderColor="#50A2DB"
              borderRadius={5}
            >
              <Text
                fontFamily={"Poppins"}
                fontSize={13}
                fontWeight={"normal"}
                color="#50A2DB"
              >
                Cancel
              </Text>
            </Button>
            <Button
              backgroundColor="#50A2DB"
              mr={3}
              onClick={onClose}
              borderRadius={5}
            >
              <Text
                fontFamily={"Poppins"}
                fontSize={13}
                color="#fff"
                fontWeight={"normal"}
              >
                &nbsp;Save&nbsp;
              </Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default commonModal;
