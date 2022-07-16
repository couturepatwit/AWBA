import React, { useContext } from "react";
import Axios from 'axios'
import { useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToLoggedIn } = useContext(AccountContext);
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const [loginStatus, setloginStatus] = useState('')

  const login = () => {

    Axios.post('http://localhost:3001/login', {
      email: email,
      password: password
    } ).then((response) => {
      if(response.data.message){
        setloginStatus(response.data.message)
      } else {
        setloginStatus("Email has been sent.")
        console.log(response);
      }
    })
  }
  


  return (
    <BoxContainer className="sign_in">
      <FormContainer>
        <Input type="email" onChange= {(e) => {setemail(e.target.value)}} placeholder="Email" />
        <Input type="password" onChange= {(e) => {setpassword(e.target.value)}} placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin=".5em" />
      <MutedLink>{loginStatus}</MutedLink>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login}>Sign in</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink >
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}


