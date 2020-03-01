import React from 'react';
import {NavLink,Route,Switch} from 'react-router-dom'
import Client from './client/'
import Intructor from './instructor/'
import {Button} from 'reactstrap'









const Forms = (props) => {
  return (
    <div>
    <div>
     <h1>Login as</h1>

      <NavLink to='/forms/login/'><Button color='success'>Client</Button></NavLink>
      {'     '}
      <NavLink to='/forms/login/as-instructor'><Button color='primary'>Instructor</Button></NavLink>
      
      
    </div>
    <Switch>
    <Route exact path='/forms/login/' component={Client} />
    <Route exact path='/forms/login/as-instructor' component={Intructor} />
    </Switch>

    </div>
  );
}

export default Forms;
