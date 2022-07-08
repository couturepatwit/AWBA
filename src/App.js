import './App.css';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { Component } from 'react';
import * as emailjs from "emailjs-com"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    60deg,
    rgba(0, 200, 0, 1) 30%,
    rgba(0, 100, 0, 1) 90%
  );
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: "",
    };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then( res => this.setState({ apiResponse: res}))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return(
      <AppContainer>
        <AccountBox />
        <p>{this.state.apiResponse}</p>
      </AppContainer>
    )
  }
}


export default App;
