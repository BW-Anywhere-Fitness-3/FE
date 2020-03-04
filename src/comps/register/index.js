import React from 'react';
import {NavLink,Route,Switch} from 'react-router-dom'
import Client from './client/'
import Intructor from './instructor/'
import styled from 'styled-components'
import {Button} from 'reactstrap'
import axios from 'axios'
 const Container = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
grid-gap:100px;


  form{
  background-color:#3A3A3C;
  width:500px;
  border-radius:20px;
  padding:50px;
  font-weight:bolder;
  box-shadow:0 0 10px #000;
  border-bottom:4px solid #1F1F1F;
  border-top:2px solid #FF0400;
  }

 `;


 





const Forms = (props) => {

  const registerHandle = (who,obj) =>{

      switch(who){
        case 'instructor':
        axios.post('https://fitnessanywheregroup3.herokuapp.com/api/instructors/register',obj).then(res=>{
          console.log(res)
            props.history.push('/fomrs/login')

        }).catch(err=>console.log(err))
        break;
        case 'client':
          axios.post('https://fitnessanywheregroup3.herokuapp.com/api/instructors/register',obj).then(res=>{
          console.log(res)
            props.history.push('/fomrs/login')

        }).catch(err=>console.log(err))
        break;
        console.log(obj)
      }


  }


  return (
    <Container>
    <div>
      <h1>Register as</h1>

      <NavLink to='/forms/register/'><Button color='success'  style={{fontWeight:'bolder',fontSize:'1.3rem'}}>Client</Button></NavLink>
      {'     '}
      <NavLink to='/forms/register/as-instructor'><Button color='primary'  style={{fontWeight:'bolder',fontSize:'1.3rem'}}>Instructor</Button></NavLink>
      
      
    </div>
    <Switch>
    <Route exact path='/forms/register/' render={()=><Client register={registerHandle} />} />
    <Route exact path='/forms/register/as-instructor' render={()=><Intructor register={registerHandle} />}/>
    </Switch>

    </Container>
  );
}

export default Forms;
