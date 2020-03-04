import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components'


const Formm = styled.form`



    .dov{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
    
label{
  font-size:1.3rem;
}
       input{
      width:450px;
      height:80px;
      font-size:2rem;
    }

      button{
        font-size:1.3rem;
        font-weight:bolder;
      }
   
  



  @media(max-width:500px){
      input{
      width:100%;
      height:70px;
      font-size:1.2rem;
        font-weight:bolder;
    }
  }
`;

 



class LoginInstructor extends React.Component{
 constructor(props){
    super(props)
        this.state={
         username:'',
          password:'',
          inpMsg1:''
       
        }

}

    send2Login = (e) =>{
      e.preventDefault()
      this.props.login('instructor',{username:this.state.username,password:this.state.password})
    }




isString1 = e =>{
    const val = e.target.value

        if(val.match(/[A-z]/i) ||
       ( val.match(/[A-z]/i) &&
               val.match(/[0-9]/))
          ){
          this.setState({inpMsg1:'valid'})
        }else{
          this.setState({inpMsg1:'not valid'})

        }
}



  render(){
    return (

          <Formm onSubmit={this.send2Login}>
          <h2>Instructor</h2>
      <FormGroup  className='dov'>
        <Label htmlFor="username">UserName</Label>
        <Input type="text"
       onChange={(e)=>this.setState({username:e.target.value})}
         onBlur={this.isString1}
         name="username" id="username" placeholder="username" required/>
     <span>{this.state.inpMsg1}</span>
      </FormGroup>
      <FormGroup  className='dov'>
        <Label htmlFor="password">Password</Label>
        <Input type="password"
        onChange={(e)=>this.setState({password:e.target.value})}
         name="password" id="password" placeholder="password " required/>
      </FormGroup>
     
      <Button>Submit</Button>
    </Formm>

      )
  }
}



export default LoginInstructor;