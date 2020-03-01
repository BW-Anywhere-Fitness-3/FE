import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




 

class LoginClient extends React.Component{
  constructor(props){
    super(props)
        this.state={
          username:'',
          password:'',
        }
  }


    send2Login = (e) =>{
      e.preventDefault()
      this.props.login(this.state)
    }

  render(){
    return (

          <Form onSubmit={this.send2Login}>
           <h2>Client</h2>
      <FormGroup>
        <Label htmlFor="username">UserName</Label>
        <Input type="text"
        onChange={(e)=>this.setState({username:e.target.value})}
         name="username" id="username" placeholder="username" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password"
        onChange={(e)=>this.setState({password:e.target.value})}
         name="password" id="password" placeholder="password " />
      </FormGroup>
     
      <Button>Submit</Button>
    </Form>

      )
  }
}



export default LoginClient;