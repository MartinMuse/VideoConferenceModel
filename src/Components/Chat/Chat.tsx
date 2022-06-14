import {
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface IChatProps {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}

function Chat(props: IChatProps) {
  const { onOpen, isOpen, onClose } = props;
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent height={"400px"}>
          <ModalHeader>
            <Center>Chat</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>
          <ModalFooter>
            <Input variant="outline" placeholder="Type your message here..." />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Chat;
