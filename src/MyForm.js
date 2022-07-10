import React, { useContext } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
  } from "./components/accountBox/common.jsx";
import { Marginer } from "./components/marginer";
import { AccountContext } from "./components/accountBox/accountContext";

 
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: '',
        email: '',
        password: ''
    };
  }
 
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);
 
    fetch('http://localhost:3000/store-data', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}
 
  render() {
    return (
        <BoxContainer onSubmit={this.handleSubmit}>
        <FormContainer>
          <Input type="text" value={this.state.value} name = "name" onChange={this.handleChange} placeholder="Full Name" />
          <Input type="text" value={this.state.value} name = "email" onChange={this.handleChange} placeholder="Email" />
          <Input type="text" value={this.state.value} name = "password" onChange={this.handleChange} placeholder="Password" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton value= "Submit" >Sign in</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Don't have an account?{" "}
          <BoldLink href="#" >
            Sign up
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    );
  }
}
 
export default MyForm;