import React, { Component } from 'react';
import './App.css';
import {NavLink,Switch,Route} from 'react-router-dom'
import {PrivateRoute} from './comps/private-router/'
import {Button,Container} from 'reactstrap'
import {connect} from 'react-redux'
import {logoutBtnState, loginBtnState} from './ReduxStore/action'

// import {Media} from 'reactstrap'
// import imgBlock from './comps/img/bg.jpg'

import Header from './header/'
import Login from './comps/sign-in/'
import Register from './comps/register/'
import LoggedClient from './comps/logged-in/client/'
import LoggedInstructor from './comps/logged-in/instructor/'



const reg = {fontWeight:'bolder',fontSize:'1.3rem',WebkitTextFillColor:'#000',color:"#000",border:'double .5px #FF0400'}
const log = {fontWeight:'bolder',fontSize:'1.3rem',border:'double .5px #FF0400'}

  
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedOrNot:false,
      btnText:'Login/Register'
    }
  }




  componentDidMount(){//CDM START

  console.log('App component updating props and state',this.props,this.state)

  }//CDM FINISH



logoutBtn = () =>{
    this.props.loginBtnState()
    this.setState({loggedOrNot:false,btnText:this.props.headerLogBtn})
    

}



logIn = () =>{
    this.props.logoutBtnState()
    this.setState({loggedOrNot:true,btnText:this.props.headerLogBtn})
}


  render() {
    return (
      <div className="App">
      <Header  usersState={this.state.btnText} logout={this.logoutBtn} />
      <Container>
<Switch>

<PrivateRoute exact path='/FE/logged-client' component={LoggedClient} />
<PrivateRoute exact path='/FE/logged-instructor' component={LoggedInstructor} />
<Route path='/FE/forms/login' render={()=><Login loginn={this.logIn}/>}/>
<Route path='/FE/forms/register' component={Register}/>




{/*THIS PAGE ONLY SHOWS BY DEFUALT*/}
<Route path={['/FE/forms','/']} render={()=>(
<div style={{marginBottom:'50px'}}>
<small></small>
<h1>Welcome</h1>
<h1>Please Login or Register</h1>
<div style={{display:'flex',gridGap:'10px',justifyContent:'center'}}>

<NavLink to='/FE/forms/login/'><Button color='dark' style={log}>Login</Button></NavLink>
{'   '}
<NavLink to='/FE/forms/register/'><Button color='light' style={reg}>Register</Button></NavLink>
</div>
</div>
  )} />
{/*THIS PAGE ONLY SHOWS BY DEFUALT*/}



</Switch>



 

  {/* <Media>
          <Media object src={imgBlock} alt='beach yoga' />
        </Media>*/}
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
    {logoutBtnState, loginBtnState}

  )(App);
