import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




 

class RegisterClient extends React.Component{
  constructor(){
    super()
 this.state={
          email:'',
          username:'',
          password:'',
        }
  }



  send2Register = e =>{
      e.preventDefault()
      this.props.register(this.state)

  }

  render(){
    return (

          <Form onSubmit={this.send2Register}>
          <h2>Client</h2>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email"
        onChange={(e)=>this.setState({email:e.target.value})}
         name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="username">UserName</Label>
        <Input type="text"
        onChange={(e)=>this.setState({username:e.target.value})}
         name="username" id="username" placeholder="username" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="text"
        onChange={(e)=>this.setState({password:e.target.value})}
         name="password" id="password" placeholder="password " />
         
      </FormGroup>
      <Button>Submit</Button>
    </Form>

      )
  }
}



export default RegisterClient;