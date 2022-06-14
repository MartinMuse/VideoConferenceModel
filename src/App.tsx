import React, { useState } from "react";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import { Avatar } from "@chakra-ui/react";
import ControlePanel from "./Components/ControlPanel/ControlPanel";

export interface IUser {
  id: number;
  name: string;
  src?: string;
  isSoundOn: boolean;
  isVideoOn: boolean;
}

function App() {
  const users: Array<IUser> = [
    {
      id: 1123,
      name: "Person 1",
      src: "https://bit.ly/dan-abramov",
      isSoundOn: true,
      isVideoOn: false,
    },
    {
      id: 1443,
      name: "Person 2",
      isSoundOn: false,
      isVideoOn: false,
    },
    {
      id: 7561,
      name: "Person 3",
      isSoundOn: false,
      isVideoOn: false,
    },
    {
      id: 1122,
      name: "Person 4",
      isSoundOn: false,
      isVideoOn: false,
    },
    {
      id: 9983,
      name: "Person 5",
      isSoundOn: false,
      isVideoOn: false,
    },
    {
      id: 5543,
      name: "Person 6",
      isSoundOn: false,
      isVideoOn: false,
    },
    {
      id: 3451,
      name: "Person 7",
      isSoundOn: false,
      isVideoOn: false,
    },
    {
      id: 3401,
      name: "Person 8",
      isSoundOn: false,
      isVideoOn: false,
    },
    {
      id: 3251,
      name: "Person 9",
      isSoundOn: false,
      isVideoOn: false,
    },
    {
      id: 1212,
      name: "Person 10",
      isSoundOn: false,
      isVideoOn: false,
    },
  ];
  const mainUser = users[0];
  const [activeUser, setActiveUser] = useState(mainUser);
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="App">
      <MainPage
        users={users}
        setActiveUser={setActiveUser}
        activeUser={activeUser}
        mainUser={mainUser}
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
      />
    </div>
  );
}

export default App;
