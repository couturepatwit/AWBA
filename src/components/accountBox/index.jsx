import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import { QRCodeSVG } from "qrcode.react";
import { LoggedInForm } from "./loggedInForm";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, .5); 
  background-color: #aaa;
  box-shadow: 0 0 20px rgba(15, 15, 15, 0.5);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 150%;
  height: 500px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: -300px;
  left: -70px;
  background: rgb(0, 100, 0);
  background: linear-gradient(
    60deg,
    rgba(0, 200, 0, 1) 20%,
    rgba(0, 100, 0, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;




export function AccountBox(props) {
  const [active, setActive] = useState("signin");

  const switchToSignup = () => {
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const switchToLoggedIn = () => {
    setTimeout(() => {
      setActive("loggedin");
    }, 400);
  };
  const contextValue = { switchToSignup, switchToSignin, switchToLoggedIn };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue</SmallText>
            </HeaderContainer>
          )}
          {active === "loggedin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
          {active === "loggedin" && <LoggedInForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}