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






  
      input{
        background-color:#1F1F1F;
        border:double .5px #FF0400;
         -webkit-text-fill-color:azure;
        color:azure;
        border-radius:5px;
      }


         input:focus{
        background-color:#1F1F1F;
        border:double .5px #FF0400;
         -webkit-text-fill-color:azure;
        color:azure;
        border-radius:5px;
      }
  }





  @media(max-width:500px){
    form{
  background-color:#3A3A3C;
  width:100%;
  border-radius:20px;
  padding:30px;
  font-weight:bolder;
  box-shadow:0 0 10px #000;
  border-bottom:4px solid #1F1F1F;
  border-top:2px solid #FF0400;
  margin-bottom:50px;
      input{
        background-color:#1F1F1F;
        border:double .5px #FF0400;
         -webkit-text-fill-color:azure;
        color:azure;
        border-radius:5px;
        min-height:50px;
        max-height:70px;
      }

  }


  }
 `;


 



const insBtn = {fontWeight:'bolder',fontSize:'1.3rem',WebkitTextFillColor:'#000',color:"#000",border:'double .5px #FF0400'}
const cliBtn = {fontWeight:'bolder',fontSize:'1.3rem',border:'#FF0400',border:'double .5px #FF0400'}

  


const Forms = (props) => {

  const registerHandle = (who,obj) =>{

      switch(who){
        case 'instructor':
        axios.post('https://fitnessanywheregroup3.herokuapp.com/api/instructors/register',obj).then(res=>{
          console.log('registering data given back',res)
            props.history.push('/fomrs/login')

        }).catch(err=>console.log('registering error',err))
        break;
        case 'client':
          axios.post('https://fitnessanywheregroup3.herokuapp.com/api/instructors/register',obj).then(res=>{
          console.log('registering data given back',res)
            props.history.push('/fomrs/login')

        }).catch(err=>console.log('registering error',err))
        break;
      }


  }


  return (
    <Container>
    <div>
      <h1>Register as</h1>

      <NavLink to='/forms/register/'><Button color='dark'  style={cliBtn}>Client</Button></NavLink>
      {'     '}
      <NavLink to='/forms/register/as-instructor'><Button color='light'  style={insBtn}>Instructor</Button></NavLink>
      
      
    </div>
    <Switch>
    <Route exact path='/forms/register/' render={()=><Client register={registerHandle} />} />
    <Route exact path='/forms/register/as-instructor' render={()=><Intructor register={registerHandle} />}/>
    </Switch>

    </Container>
  );
}

export default Forms;
