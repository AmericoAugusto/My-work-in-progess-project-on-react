import { Envelope } from "phosphor-react";
import "../src/styles/global.css";
import Button from "./component/Button";
import Heading from "./component/Heading";
import Text from "./component/Text";
import TextInput from "./component/TextInput";
import Checkbox from "./component/Checkbox";
import { useState } from "react";
import {HiEye, HiEyeOff } from "react-icons/hi"

const App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState("true")

  const handleCLick = (e) => {
    e.preventDefault()
    console.log("FUI CLICADO")
  }
  return (
    <div className="w-screen h-screen bg-black-100 text-color text-gray-300 flex flex-col items-center  justify-center">
      <header className="flex flex-col items-center">
        <Heading className="mt-4" size="lg">
          Viva la revolucíon
        </Heading>

        <Text className=" mb-4" size="lg">
          Faça login e comece a usar
        </Text>
      </header>
      <div className="flex flex-col items-center">
        <form className="flex flex-col items-stretch">
          <Text> E-mail address </Text>
          <label htmlFor="email" className="font-semibold" placeholder="Enter your e-mail"></label>

            <TextInput type="email"
             value={email}
             onChange={e => setEmail(e.target.value)}> </TextInput>
            <Text> Password </Text>
            <label htmlFor="password" className="font-semibold" placeholder="Enter your password"></label>

            <TextInput type={show ? "text" : "password"}
             value={password}
             onChange={e => setPassword(e.target.value)} > </TextInput>
          

          <Checkbox />
          <Button type="submit">ENTER</Button>
          <footer className="flex mt-4 flex-col items-center">
            <Text className=" mb-2">Forgot your password?</Text>
            <Text>Do not have an account?</Text>
          </footer>
        </form>
      </div>
    </div>
  );
};
export default App;
