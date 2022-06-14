import React from "react";
import { Center, Grid, GridItem, Text } from "@chakra-ui/react";
import ConferenceDisplay from "../ConferenceDisplay/ConferenceDisplay";
import { IUser } from "../../../App";

interface IFirstView {
  activeUser: IUser;
  users: Array<IUser>;
}

function SecondView(props: IFirstView) {
  const { activeUser, users } = props;
  return (
    <Grid templateRows="repeat(7, 1fr)" gap={2}>
      <GridItem rowSpan={7}>
        <Center>
          <Text>{`Total count of users now: ${users.length}`}</Text>
        </Center>
        <Center margin={2}>
          <ConferenceDisplay bigScreen user={activeUser} />
        </Center>
      </GridItem>
    </Grid>
  );
}

export default SecondView;
