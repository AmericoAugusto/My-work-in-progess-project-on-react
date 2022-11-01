import { Envelope } from "phosphor-react";
import "../src/styles/global.css";
import {useState } from "react";
import {HiEye, HiEyeOff } from "react-icons/hi"
import React from "react";
import { Context } from "./MyContext";
import Directions from "./routes";
import { IStateUser } from "./types/types";







const App = () => {
  const [email, setEmail] = useState<IStateUser>()
  const [password, setPassword] = useState<IStateUser>()
  
  return (
      <Context.Provider value={{password, setPassword, email, setEmail}}>
        <Directions />
        
      </Context.Provider>
    );
  }
export default App;