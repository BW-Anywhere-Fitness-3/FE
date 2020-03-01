import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';






class RegisterInstructor extends React.Component{
  constructor(){
    super()

  }


  render(){
    return (

          <Form>
          <caption>Instructor</caption>
     <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="username">UserName</Label>
        <Input type="text" name="username" id="username" placeholder="username" />
      </FormGroup>
      
     
      <FormGroup>
        <Label for="exampleFile">UpLoad Image</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>types included</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Cardio
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Aerobic
          </Label>
        </FormGroup>
         <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Cross-Training
          </Label>
        </FormGroup>
         <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Yoga
          </Label>
        </FormGroup>
         <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Strength
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Dance
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Agree on Terms & Services
        </Label>
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



export default RegisterInstructor;