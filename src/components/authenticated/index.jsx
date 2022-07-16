import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Marginer } from "../marginer";
import { MutedLink, BoldLink } from "../accountBox/common";

 

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
  font-size: 25px;
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




export function Authenticated(props) {

  return (

      <BoxContainer>
        <TopContainer>
          <BackDrop/>
            <HeaderContainer>
              <HeaderText>AWBA</HeaderText>
            </HeaderContainer>
        </TopContainer>
        <InnerContainer>
        
          <HeaderText>Congratulations!</HeaderText>
          <SmallText>You are now authenticated</SmallText>
        <Marginer direction="vertical" margin={20} />
        <MutedLink href="#">
          Stuck? Go back to sign in
            <BoldLink href="#" >
                here.
            </BoldLink>
          <Marginer direction="vertical" margin="1em" />
        </MutedLink>
        </InnerContainer>
      </BoxContainer>

  );
}