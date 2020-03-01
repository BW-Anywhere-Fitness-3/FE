import React, { Component } from 'react';
import './App.css';
import {NavLink,Switch,Route} from 'react-router-dom'
import {PrivateRoute} from './comps/private-router/'
import {Button} from 'reactstrap'


import Header from './header/'
import Login from './comps/sign-in/'
import Register from './comps/register/'
import LoggedClient from './comps/logged-in/client/'
import LoggedInstructor from './comps/logged-in/instructor/'




class App extends Component {
  constructor(){
    super()
    this.state={
      loggedOrNot:false,
      btnText:'Login/Register'
    }
  }




  componentDidMount(){//CDM START



    if(window.localStorage.getItem('token'))//start of header button scheme


      /*do this: change state to know user is logged
       in and change button in header to a logout button*/ 
   {this.setState({ loggedOrNot:true, btnText:'Logout'})}


    /*if not then do this: change state to know no one is logged
       in and change button in header to a login or register button*/ 
      else{this.setState({loggedOrNot:false,btnText:'Login/Register'})
    }//end of header button scheme



  }//CDM FINISH









  render() {
    return (
      <div className="App">
      <Header  usersState={this.state.btnText}/>

<Switch>

<PrivateRoute exact path='/logged-client' component={LoggedClient} />
<PrivateRoute exact path='/logged-instuctor' component={LoggedInstructor} />
<Route path='/forms/login' component={Login}/>
<Route path='/forms/register' component={Register}/>




<Route render={()=>(//BY DEFAULT SHOW THIS
<div>
<small>default page</small>
<h1>Welcome</h1>
<h1>Please Login or Register</h1>
<div>

<NavLink to='/forms/login/'><Button color='success'>Login</Button></NavLink>
{'   '}
<NavLink to='/forms/register/'><Button color='primary'>Register</Button></NavLink>

</div>
<div>
<Route path='/forms/login/' component={Login} />
<Route path='/forms/register/' component={Register} />
</div>
</div>

  )} />

{/*THIS PAGE ONLY SHOWS MY DEFUALT*/}

</Switch>





      </div>
    );
  }
}

export default App;
