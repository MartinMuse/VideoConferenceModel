import React, { useState } from "react";
import { IUser } from "../../App";
import "./MainPage.css";
import {
  Box,
  Center,
  Grid,
  GridItem,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import ControlPanel from "../ControlPanel/ControlPanel";
import ConferenceDisplay from "./ConferenceDisplay/ConferenceDisplay";
import UsersPanel from "./UsersPanel/UsersPanel";
import Chat from "../Chat/Chat";
import FirstView from "./Views/FirstView";
import SecondView from "./Views/SecondView";

interface IMainPageProps {
  activeUser: IUser;
  mainUser: IUser;
  setActiveUser: (user: IUser) => void;
  users: Array<IUser>;
  isChatOpen: boolean;
  setIsChatOpen: (value: boolean) => void;
}

const MainPage: React.FC<IMainPageProps> = ({
  users,
  isChatOpen = false,
  setIsChatOpen,
  mainUser,
  setActiveUser,
  activeUser,
}): JSX.Element => {
  const [isPhoneScreen] = useMediaQuery(
    "(min-device-width : 320px) and (max-device-width : 480px"
  );

  const [viewType, setViewType] = useState(1);

  const changeViewTypeHandler = () => {
    if (viewType === 1) {
      setViewType(2);
    } else if (viewType === 2) {
      setActiveUser(mainUser);
      setViewType(3);
    } else if (viewType === 3) {
      setViewType(1);
    }
  };

  const renderView = () => {
    switch (viewType) {
      case 1:
        return (
          <FirstView
            activeUser={activeUser}
            mainUser={mainUser}
            setActiveUser={setActiveUser}
            users={users}
          />
        );
      case 2:
        return <SecondView activeUser={activeUser} users={users} />;
      case 3:
        return <SecondView activeUser={activeUser} users={users} />;
    }
  };

  return (
    <Grid
      templateRows="repeat(8, 1fr)"
      gap={2}
      padding={2}
      height={"100%"}
      width={"100%"}
    >
      <GridItem rowSpan={7}>{renderView()}</GridItem>
      <GridItem rowSpan={1} borderTop={"1px solid cornflowerblue"}>
        <ControlPanel
          onChatClick={() => setIsChatOpen(!isChatOpen)}
          onViewChange={changeViewTypeHandler}
        />
      </GridItem>
      <Chat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpen={() => setIsChatOpen(true)}
      />
    </Grid>
  );
};

export default MainPage;
