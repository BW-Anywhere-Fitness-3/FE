import React from 'react';
import {NavLink,Route,Switch} from 'react-router-dom'
import Client from './client/'
import Intructor from './instructor/'
import {Button} from 'reactstrap'









const Forms = (props) => {

  const registerHandle = (obj) =>{
        console.log(obj)

  }


  return (
    <div>
    <div>
      <h1>Register as</h1>

      <NavLink to='/forms/register/'><Button color='success'>Client</Button></NavLink>
      {'     '}
      <NavLink to='/forms/register/as-instructor'><Button color='primary'>Instructor</Button></NavLink>
      
      
    </div>
    <Switch>
    <Route exact path='/forms/register/' render={()=><Client register={registerHandle} />} />
    <Route exact path='/forms/register/as-instructor' render={()=><Intructor register={registerHandle} />}/>
    </Switch>

    </div>
  );
}

export default Forms;
