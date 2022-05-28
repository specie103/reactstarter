import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

const appContext = createContext(null);
function contextTutorial() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <appContext.Provider value={{username, setUsername}}>
        <User />
        <Login />
      </appContext.Provider>
    </div>
  );
}

export default contextTutorial;