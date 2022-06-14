import React, { useState } from "react";
import { Box, Center, Circle, HStack, Icon } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { AiFillSound, AiOutlineSound } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { TbLayout2 } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";

interface IControlPanel {
  onChatClick: () => void;
  onViewChange: () => void;
}

function ControlPanel(props: any) {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const { onChatClick, onViewChange } = props;

  const soundClickHandler = () => {
    setIsSoundOn(!isSoundOn);
  };
  const videoClickHandler = () => {
    setIsVideoOn(!isVideoOn);
  };

  return (
    <HStack bg={"white"} justify={"center"} p={3} spacing={3}>
      {isSoundOn ? (
        <Circle size="16" bg="tomato" color="white" onClick={soundClickHandler}>
          <Icon as={AiFillSound} />
        </Circle>
      ) : (
        <Circle
          size="16"
          bg="red.50"
          border={1}
          color="tomato"
          onClick={soundClickHandler}
        >
          <Icon as={AiOutlineSound} />
        </Circle>
      )}

      {isVideoOn ? (
        <Circle
          size="16"
          bg="darkgray"
          color="white"
          onClick={videoClickHandler}
        >
          <Icon as={AiFillCamera} />
        </Circle>
      ) : (
        <Circle
          size="16"
          bg="blackAlpha.50"
          color="darkgray"
          onClick={videoClickHandler}
        >
          <Icon as={AiFillCamera} />
        </Circle>
      )}
      <Circle size="16" bg="purple.700" color="white" onClick={onViewChange}>
        <Icon as={TbLayout2} />
      </Circle>
      <Circle size="16" bg="limegreen" color="white" onClick={onChatClick}>
        <Icon as={IoMenu} />
      </Circle>
    </HStack>
  );
}

export default ControlPanel;
