import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';






class LoginInstructor extends React.Component{
  constructor(){
    super()

  }


  render(){
    return (

          <Form>
          <caption>Instructor</caption>
      <FormGroup>
        <Label htmlFor="username">UserName</Label>
        <Input type="text" name="username" id="username" placeholder="username" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="password " />
      </FormGroup>
     
      <Button>Submit</Button>
    </Form>

      )
  }
}



export default LoginInstructor;