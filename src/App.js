import React, { Component } from 'react';
import './App.css';
import {NavLink,Switch,Route} from 'react-router-dom'
import {PrivateRoute} from './comps/private-router/'
import {Button,Container} from 'reactstrap'
import {connect} from 'react-redux'

import Header from './header/'
import Login from './comps/sign-in/'
import Register from './comps/register/'
import LoggedClient from './comps/logged-in/client/'
import LoggedInstructor from './comps/logged-in/instructor/'
import {getClasses} from './ReduxStore/action'
import axios from 'axios'



const reg = {fontWeight:'bolder',fontSize:'1.3rem',WebkitTextFillColor:'#000',color:"#000",border:'double .5px #FF0400'}
const log = {fontWeight:'bolder',fontSize:'1.3rem',border:'#FF0400',border:'double .5px #FF0400'}

  
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedOrNot:false,
      btnText:'Login/Register'
    }
  }




  componentDidMount(){//CDM START

this.props.getClasses()

    if(window.localStorage.getItem('token'))//start of header button scheme

      /*do this: change state to know user is logged
       in and change button in header to a logout button*/ 
   {this.setState({ loggedOrNot:true, btnText:'Logout'})}


    /*if not then do this: change state to know no one is logged
       in and change button in header to a login or register button*/ 
      else{this.setState({loggedOrNot:false,btnText:'Login/Register'})}
    //end of header button scheme


  }//CDM FINISH





componentDidUpdate(){
// console.log(this.props)



}


logoutBtn = () =>{
    this.setState({loggedOrNot:false,btnText:'Login/Register'})
    window.localStorage.clear()
}


logIn = () =>{
    this.setState({loggedOrNot:true,btnText:'Logout'})
}


  render() {
    return (
      <div className="App">
      <Header  usersState={this.state.btnText} logout={this.logoutBtn} />
      <Container>
<Switch>

<PrivateRoute exact path='/logged-client' component={LoggedClient} />
<PrivateRoute exact path='/logged-instructor' component={LoggedInstructor} />
<Route path='/forms/login' render={()=><Login loginn={this.logIn}/>}/>
<Route path='/forms/register' component={Register}/>




{/*THIS PAGE ONLY SHOWS BY DEFUALT*/}
<Route render={()=>(
<div>
<small>default page</small>
<h1>Welcome</h1>
<h1>Please Login or Register</h1>
<div>

<NavLink to='/forms/login/'><Button color='dark' style={log}>Login</Button></NavLink>
{'   '}
<NavLink to='/forms/register/'><Button color='light' style={reg}>Register</Button></NavLink>
</div>
</div>
  )} />
{/*THIS PAGE ONLY SHOWS BY DEFUALT*/}



</Switch>




  </Container>
      </div>
    );
  }
}



const mapStateToProps = state =>{
      return {
        ...state,
      }
}

export default connect(
    mapStateToProps,
    {getClasses}

  )(App);
