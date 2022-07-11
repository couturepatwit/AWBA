import React, { useContext } from "react";
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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToLoggedIn } = useContext(AccountContext);
  


  return (
    <BoxContainer className="sign_in">
      <FormContainer>
        <Input type="text" id = "name" name = "name"  placeholder="Full Name" />
        <Input type="text" id = "email" name = "email"  placeholder="Email" />
        <Input type="text" id = "password" name = "password"  placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={switchToLoggedIn}>Sign in</SubmitButton>
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


