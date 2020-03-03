import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {axiosCall} from '../../../../axios/'
let msg = false;



class Formio extends React.Component{
  constructor(){
  super()
  this.state={
    className:'',
    type:'',
    durationMins:'',
    intesityLevel:'',
    location:'',
    attendees:'',
    maxAttendees:'',
    startTime:''
  }

  }



    createClass = obj =>{
      console.log(obj)
      const withId = `/api/classes`
      axiosCall().post(withId,obj).then(
        res=>{
          console.log(res)
        })
    }

    send2cc = (e)=>{
      e.preventDefault()
          this.createClass(this.state)
      e.target.reset()

    }


  render(){
  return(

    <Form onSubmit={this.send2cc}>
          <h2>Creator Mode</h2>
     <FormGroup>
        <Label htmlFor="className">Class Name:</Label>
        <Input type="text"
         onChange={(e)=>this.setState({className:e.target.value})}
         name="className" id="className" placeholder="Class Name" />
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
        <Label htmlFor="intesityLevel" sm={2}>intesity Level:</Label>
        <Col sm={10}>
          <Input type="select"
          onChange={(e)=>this.setState({intesityLevel:e.target.value})}
           name="intesityLevel" id="intesityLevel">
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