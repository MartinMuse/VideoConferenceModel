import React from "react";
import { IUser } from "../../../App";
import { Avatar, Box, Center, Flex, Image, Square } from "@chakra-ui/react";

interface IUserItemProps {
  user: IUser;
}

function UserItem(props: IUserItemProps) {
  const { user } = props;
  const renderDisplay = () => {
    if (user) {
      if (user.src) {
        return (
          <Flex justify={"center"} align={"center"} width={"180px"}>
            <img
              src={user.src}
              style={{ objectFit: "cover", width: "180px", height: "120px" }}
            />
          </Flex>
        );
      } else
        return (
          <Flex
            justify={"center"}
            align={"center"}
            width={"180px"}
            bg={"gray.200"}
          >
            {user.name}
          </Flex>
        );
    } else return <Box h={"100%"} />;
  };
  return renderDisplay();
}

export default UserItem;
