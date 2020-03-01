import React, {useState,useEffect} from 'react';
import {NavLink,Route,Switch} from 'react-router-dom'
import Client from './client/'
import Intructor from './instructor/'
import {Button} from 'reactstrap'









const Forms = (props) => {

const loginHandle = (obj) =>{
        console.log(obj)

        async function pretendAuthReactor(){

                try{

                   await window.localStorage.setItem('token','clientValid')
                 
                }catch(err){
                    throw Error(err)
                }finally{
                      await props.history.push('/logged-client')
                }
        }pretendAuthReactor()
        
  }

  return (
    <div>
    <div>
     <h1>Login as</h1>

      <NavLink to='/forms/login/'><Button color='success'>Client</Button></NavLink>
      {'     '}
      <NavLink to='/forms/login/as-instructor'><Button color='primary'>Instructor</Button></NavLink>
      
      
    </div>
    <Switch>
    <Route exact path='/forms/login/' render={()=><Client login={loginHandle} />} />
    <Route exact path='/forms/login/as-instructor' render={()=><Intructor login={loginHandle} />} />
    </Switch>

    </div>
  );
}

export default Forms;
