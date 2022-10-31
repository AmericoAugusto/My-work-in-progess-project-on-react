import { Envelope } from "phosphor-react";
import "../src/styles/global.css";
import Button from "./component/Button";
import Heading from "./component/Heading";
import Text from "./component/Text";
import TextInput from "./component/TextInput";
import Checkbox from "./component/Checkbox";
import {useState } from "react";
import {HiEye, HiEyeOff } from "react-icons/hi"
import React from "react";
import  Shopping from "./pages/Shopping";
import Context from './Context';
import Login from "./pages/Login";
import InsideCart from "./pages/InsideCart";
import InsideProfile from "./pages/InsideProfile";




const App = () => {
  return (
      <Context.Provider>
        <div>
          <p> DevMedia Context API</p>
        </div>
      </Context.Provider>
    );
  }
export default App;