import React from "react";
import { Box, Flex, Text, HStack, Center } from "@chakra-ui/react";
import UserItem from "../User/UserItem";
import { IUser } from "../../../App";

interface IUsersPanelProps {
  users: Array<any>;
  activeUser: IUser;
  mainUser: IUser;
  setActiveUser: (user: IUser) => void;
}

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

function UsersPanel(props: IUsersPanelProps) {
  const { users, setActiveUser, activeUser, mainUser } = props;

  return (
    <HStack w={"100%"} h={"100%"} gap={2} className={"users--container"}>
      {users.map((u) => {
        return (
          <Flex
            direction={"column"}
            position={"relative"}
            className={"users--container__item"}
            h={"100%"}
            minW={"200px"}
            bg={"green.200"}
            onClick={() => setActiveUser(u)}
            border={`${u.id === activeUser.id ? "solid 2px" : "none"}`}
          >
            <Center height={"100%"}>
              <Text>{getInitials(u.name)}</Text>
            </Center>
            {u.id === mainUser.id && (
              <Center
                position={"absolute"}
                height={"20%"}
                width={"100%"}
                bg={"blackAlpha.800"}
                color={"white"}
                bottom={0}
                left={0}
              >
                You
              </Center>
            )}
          </Flex>
        );
      })}
    </HStack>
  );
}

export default UsersPanel;
