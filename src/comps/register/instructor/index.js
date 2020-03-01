import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



 


class RegisterInstructor extends React.Component{
  constructor(){
    super()
 this.state={
          email:'',
          username:'',
          password:'',
          types:[],
          termsAndAgreements:false,
          image:''
        }
  }


 send2Register = e =>{
      e.preventDefault()
      this.props.register(this.state)

  }




  add2Types = (toggle,type2add) =>{//adding to workput types array

console.log(toggle)

if
(toggle===true){//if checkbox is checked
return  this.setState({
types:[
...this.state.types
,type2add]
})
}
else
{
return  this.setState({
types:this.state.types.filter(eachType=>eachType!==type2add)
})
}

  }


  render(){
    return (

          <Form onSubmit={this.send2Register}>
          <h2>Instructor</h2>
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
      
        <hr />
     
      <FormGroup>
        <Label for="exampleFile">UpLoad Image</Label>
        <Input type="file"
         onChange={(e)=>this.setState({image:e.target.value})}
         name="file" id="exampleFile" />
        <FormText color="muted">
          This is a file upload for there image or video punch thingy.
        </FormText>
      </FormGroup>
        <hr />
        <h3>types included</h3>

      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <FormGroup tag="fieldset">
        <FormGroup check>
          <Label check>
            <Input type="checkbox"
            onClick={(e)=>this.add2Types(e.target.checked,'Cardio')}
             name="types1" />{' '}
            Cardio
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox"
             onClick={(e)=>this.add2Types(e.target.checked,'Aerobic')}
             name="types2" />{' '}
           Aerobic
          </Label>
        </FormGroup>
         <FormGroup check>
          <Label check>
            <Input type="checkbox"
             onClick={(e)=>this.add2Types(e.target.checked,'Cross-Training')}
             name="types3" />{' '}
           Cross-Training
          </Label>
        </FormGroup>
        </FormGroup>
        <FormGroup tag="fieldset">
         <FormGroup check>
          <Label check>
            <Input type="checkbox"
            onClick={(e)=>this.add2Types(e.target.checked,'Yoga')}
             name="types4" />{' '}
           Yoga
          </Label>
        </FormGroup>
         <FormGroup check>
          <Label check>
            <Input type="checkbox"
             onClick={(e)=>this.add2Types(e.target.checked,'Strength')}
             name="types5" />{' '}
           Strength
          </Label>
      </FormGroup>
        <FormGroup check >
          <Label check>
            <Input type="checkbox"
             onClick={(e)=>this.add2Types(e.target.checked,'Dance')}
             name="types6"  />{' '}
            Dance
          </Label>
        </FormGroup>
          </FormGroup>
</div>
        <hr />
      <FormGroup check>
        <Label check>
          <Input type="checkbox"
           onClick={(e)=>this.setState({termsAndAgreements:true})}
           />{' '}
          Agree on Terms & Services
        </Label>
      </FormGroup>
        <hr />

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



export default RegisterInstructor;