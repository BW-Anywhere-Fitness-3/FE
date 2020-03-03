import React from 'react';
import {NavLink,Route,Switch} from 'react-router-dom'
import Client from './client/'
import Intructor from './instructor/'
import {Button} from 'reactstrap'
import axios from 'axios'


 





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
          axios.post('https://fitnessanywheregroup3.herokuapp.com/api/clients/register',obj).then(res=>{
          console.log(res)
            props.history.push('/fomrs/login')

        }).catch(err=>console.log(err))
        break;
        console.log(obj)
      }


  }


  return (
    <div>
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

    </div>
  );
}

export default Forms;
