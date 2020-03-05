import React from 'react'
import { Col, Button, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components'
import {axiosCall} from '../../../../axios/'


const Form = styled.form`
background-color:#3A3A3C;
padding:2%;
-webkit-text-fill-color:azure;
color:azure;
border:solid 1px #FF0400;
box-shadow:0 0 5px #000;
font-weight:bolder;

  input{
    background-color:#1F1F1F;
    border-left:double #FF0400;
    border-bottom:double #FF0400;
    -webkit-text-fill-color:azure;
    color:azure;
  }

  select{
        background-color:#1F1F1F;
    border-left:double #FF0400;
    border-bottom:double #FF0400;
    -webkit-text-fill-color:azure;
    color:azure;
  }

  select:focus{
    background-color:#1F1F1F;
    border-left:double #FF0400;
    border-bottom:double #FF0400;
    -webkit-text-fill-color:azure;
    color:azure;
  }

  input:focus{
    background-color:#1F1F1F;
    border-left:double #FF0400;
    border-bottom:double #FF0400;
    -webkit-text-fill-color:azure;
    color:azure;
  }

  button{
    font-weight:bolder;
  }
`;

class Formio extends React.Component{
  constructor(){
  super()
  this.state={
    workoutName:'',
    type:'',
    durationMins:'',
    intensityLevel:'',
    location:'',
    attendees:'',
    maxAttendees:'',
    startTime:''
  }

  }



    send2cc = (e)=>{
      e.preventDefault()
       axiosCall().post('/api/classes',this.state).then(
        res=>{
          console.log(res)
          this.props.toggle()
      this.props.refreshClass()


        })
      // e.target.reset()
      
    }


  render(){
  return(

    <Form onSubmit={this.send2cc}>
          <h2>Creator Mode</h2>
     <FormGroup>
        <Label htmlFor="workoutName">Class Name:</Label>
        <Input type="text"
         onChange={(e)=>this.setState({workoutName:e.target.value})}
         name="workoutName" id="workoutName" placeholder="Workout Name" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="location">Location:</Label>
        <Input type="text"
         onChange={(e)=>this.setState({location:e.target.value})}
         name="location" id="location" placeholder="Location" />
      </FormGroup>
          <FormGroup>
        <Label htmlFor="durationMins">Duration Minutes:</Label>
        <Input type="phone"
         onChange={(e)=>this.setState({durationMins:e.target.value})}
         name="durationMins" id="durationMins" placeholder="Duration Minutes" />
      </FormGroup>

       <FormGroup row>
        <Label htmlFor="intensityLevel" sm={2}>intesity Level:</Label>
        <Col sm={10}>
          <Input type="select"
          onChange={(e)=>this.setState({intensityLevel:e.target.value})}
           name="intensityLevel" id="intensityLevel">
            <option>High</option>
            <option>Med</option>
            <option>Low</option>
            <option>Starter</option>
          </Input>
        </Col>
      </FormGroup>

          <FormGroup>
        <Label htmlFor="attendees">attendees:</Label>
        <Input type="number"
         onChange={(e)=>this.setState({attendees:e.target.value})}
         name="attendees" min='0' id="attendees" placeholder="Attendees" />
      </FormGroup>

           <FormGroup>
        <Label htmlFor="maxAttendees">maxAttendees:</Label>
        <Input type="number"
         onChange={(e)=>this.setState({maxAttendees:e.target.value})}
         name="maxAttendees" min='0' id="maxAttendees" placeholder="Max Attendees" />
      </FormGroup>

           <FormGroup>
        <Label htmlFor="startTime">startTime:</Label>
        <Input type="phone"
         onChange={(e)=>this.setState({startTime:e.target.value})}
         name="startTime" id="startTime" placeholder="startTime" />
      </FormGroup>
      
        <hr />
     
        <h3>types included</h3>

      <div >
       <FormGroup row>
        <Label htmlFor="type" sm={2}>Type</Label>
        <Col sm={10}>
          <Input type="select"
          onChange={(e)=>this.setState({type:e.target.value})}
           name="type" id="type">
            <option>Cardio</option>
            <option>Aerobic</option>
            <option>Cross Training</option>
            <option>Yoga</option>
            <option>Strength</option>
            <option>Dance</option>
          </Input>
        </Col>
      </FormGroup>
     
</div>
        <hr />
    
        <hr />

    
      <Button>Submit</Button>
    </Form>
  )
  }
}




export default Formio