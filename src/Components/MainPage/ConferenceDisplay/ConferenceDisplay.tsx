import React from "react";
import { Center } from "@chakra-ui/react";
import { IUser } from "../../../App";

interface IDisplayProps {
  user: IUser | null;
  bigScreen?: boolean;
}

const ConferenceDisplay: React.FC<IDisplayProps> = ({
  user,
  bigScreen = false,
}): JSX.Element => {
  const renderDisplay = () => {
    return bigScreen ? (
      <Center
        width={"100%"}
        height={"80vh"}
        border={"solid"}
        bg={"gray.400"}
        fontWeight={"38"}
        fontSize={"38"}
        color={"white"}
      >
        {user ? user.name : "No user"}
      </Center>
    ) : (
      <Center
        width={"100%"}
        maxWidth={"600px"}
        height={"90%"}
        minH={"400px"}
        border={"solid"}
        bg={"gray.400"}
        fontWeight={"38"}
        fontSize={"38"}
        color={"white"}
      >
        {user ? user.name : "No user"}
      </Center>
    );
  };

  return renderDisplay();
};

export default ConferenceDisplay;
