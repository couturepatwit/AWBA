import './App.css';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { Authenticated } from './components/authenticated';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

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

function App() {

  return(
    
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element ={<AccountBox/>}/>
          <Route exact path = '/authenticated' element = {<Authenticated/>} />
        </Routes>
      </BrowserRouter>
    </AppContainer>

  )
}



export default App;
