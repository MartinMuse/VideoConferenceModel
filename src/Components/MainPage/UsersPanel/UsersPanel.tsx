import React, { useMemo } from "react";
import { Box, Flex, Text, HStack, Center, AspectRatio } from "@chakra-ui/react";
import UserItem from "../User/UserItem";
import { getInitials, IUser } from "../../../App";

interface IUsersPanelProps {
  users: Array<any>;
  activeUser: IUser;
  mainUser: IUser;
  setActiveUser: (user: IUser) => void;
}

function UsersPanel(props: IUsersPanelProps) {
  const { users, setActiveUser, activeUser, mainUser } = props;

  const usersItems = useMemo(
    () =>
      users.map((u) => {
        return (
          <Flex
            key={`user_${u.id}`}
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
              {u.src ? (
                <AspectRatio maxW="560px" ratio={1}>
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                    allowFullScreen
                  />
                </AspectRatio>
              ) : (
                <Text>{getInitials(u.name)}</Text>
              )}
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
      }),
    [users]
  );

  return (
    <HStack w={"100%"} h={"100%"} gap={2} className={"users--container"}>
      {usersItems}
    </HStack>
  );
}

export default UsersPanel;
