import React from "react";
import { Center, Grid, GridItem, Text } from "@chakra-ui/react";
import UsersPanel from "../UsersPanel/UsersPanel";
import ConferenceDisplay from "../ConferenceDisplay/ConferenceDisplay";
import { IUser } from "../../../App";

interface IFirstView {
  activeUser: IUser;
  mainUser: IUser;
  setActiveUser: (user: IUser) => void;
  users: Array<IUser>;
}

function FirstView(props: IFirstView) {
  const { activeUser, mainUser, setActiveUser, users } = props;
  return (
    <Grid templateRows="repeat(7, 1fr)" gap={2}>
      <GridItem
        rowSpan={2}
        overflowX={"auto"}
        className={"users-panel__container"}
      >
        <UsersPanel
          users={users}
          setActiveUser={setActiveUser}
          activeUser={activeUser}
          mainUser={mainUser}
        />
      </GridItem>
      <GridItem rowSpan={5}>
        <Center>
          <Text>{`Total count of users now: ${users.length}`}</Text>
        </Center>
        <Center margin={2}>
          <ConferenceDisplay user={activeUser} />
        </Center>
      </GridItem>
    </Grid>
  );
}

export default FirstView;
