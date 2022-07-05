import React, { useContext } from "react";
import styled from "styled-components";
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
import { QRCodeSVG } from "qrcode.react";

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

export function LoggedInForm(props) {
  const { switchToLoggedIn } = useContext(AccountContext);
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <SmallText>An email has been sent to your address.
      </SmallText>
      <SmallText>Please scan the QR Code given to authenticate.</SmallText>
      <Marginer direction="vertical" margin={20} />
      <MutedLink href="#">
        Stuck? Go back to sign in
        <BoldLink href="#" onClick={switchToSignin}>
          here.
        </BoldLink>
        <Marginer direction="vertical" margin="1em" />
      </MutedLink>
    </BoxContainer>
  );
}