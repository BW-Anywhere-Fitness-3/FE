import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';






class RegisterClient extends React.Component{
  constructor(){
    super()

  }


  render(){
    return (

          <Form>
          <caption>Client</caption>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="username">UserName</Label>
        <Input type="text" name="username" id="username" placeholder="username" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Select</Label>
        <Input type="text" name="password" id="password" placeholder="password " />
         
      </FormGroup>
      <Button>Submit</Button>
    </Form>

      )
  }
}



export default RegisterClient;