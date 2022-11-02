import { Envelope } from "phosphor-react";
import "../src/styles/global.css";
import {useState } from "react";
import {HiEye, HiEyeOff } from "react-icons/hi"
import React from "react";
import MyContext from "./context/MyContext";
import Directions from "./routes/routes";
import { IStateUser, IUser } from "./types/types";







const App = () => {
  const [email, setEmail] = useState<IUser>()
  const [password, setPassword] = useState<IUser>()
  
  return (
      <MyContext.Provider value={{password, email, setEmail, setPassword}}>
        <Directions />
        
      </MyContext.Provider>
    );
  }
export default App;