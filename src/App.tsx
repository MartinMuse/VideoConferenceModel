import React, { useState } from "react";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import { users } from "./Components/mocks/users";

export interface IUser {
  id: number;
  name: string;
  src?: string;
  isSoundOn: boolean;
  isVideoOn: boolean;
}

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

function App() {
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
