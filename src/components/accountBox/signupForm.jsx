import React, { useContext } from "react";
import { useState } from "react";
import Axios from 'axios'
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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [nameReg, setnameReg] = useState('')
  const [emailReg, setemailReg] = useState('')
  const [passwordReg, setpasswordReg] = useState('')



  const register = () => {

    Axios.post('http://localhost:3001/register', {
      name: nameReg,
      email: emailReg,
      password: passwordReg
    } ).then((response) => {
      console.log(response);
    })
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" onChange= {(e) => {setnameReg(e.target.value)}} placeholder="Full Name" />
        <Input type="email" onChange= {(e) => {setemailReg(e.target.value)}} placeholder="Email" />
        <Input type="password" onChange= {(e) => {setpasswordReg(e.target.value)}} placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={30} />
      <SubmitButton type="submit" onClick={register}>Sign up</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign in
        </BoldLink>
        <Marginer direction="vertical" margin="1em" />
      </MutedLink>
    </BoxContainer>
  );
}