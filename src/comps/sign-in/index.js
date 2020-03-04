import React, {useState,useEffect} from 'react';
import {NavLink,Route,Switch,useHistory} from 'react-router-dom'
import Client from './client/'
import Intructor from './instructor/'
import {Button} from 'reactstrap'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosCall} from '../axios/'
import {getClasses} from '../../ReduxStore/action'
 


  
const Forms = (props) => {


        const [isFirtLogin,setisFirtLogin] = useState( )
        const [welcomeMsg,setwelcomeMsg] = useState( )
        const history = useHistory()
  console.log('form',props,history)

const loginHandle = (who,obj) =>{


     

            switch(who){

              case 'instructor':
              console.log(who,obj)


     return   axios.post('https://fitnessanywheregroup3.herokuapp.com/api/instructors/login',obj)
             .then(res=>{
          console.log('logging in....',res)
                     localStorage.setItem('token',res.data.token)
                     setisFirtLogin(res.data.isFirtLogin)
                     setwelcomeMsg(res.data.message)
                     props.loginn()
                     history.push('/logged-instructor')

            // localStorage.setItem('token',res.data.token)
            // localStorage.setItem('firstTime',res.data.isFirstLogin)
            // localStorage.setItem('msg',res.data.message)
            //  props.loginn()
            // props.history.push('/logged-instructor')
        })
             .catch(err=>console.log(err))
                     
        case 'client':
              console.log(who,obj)


     return  axios.post('https://fitnessanywheregroup3.herokuapp.com/api/instructors/login',obj)
         .then(res=>{
          console.log('logging in....',res)

                     localStorage.setItem('token',res.data.token)
                     setisFirtLogin(res.data.isFirtLogin)
                     setwelcomeMsg(res.data.message)
                     props.loginn()
                     history.push('/logged-client')
            
             
                
            
          

        })
         .catch(err=>confirm('sorry please try again, we dont recognize those credentials',err))

      }





  }







  useEffect(()=>{

  })

  return (
    <div>
    <div>
     <h1>Login as</h1>

      <NavLink to='/forms/login/'><Button color='success' style={{fontWeight:'bolder',fontSize:'1.3rem'}}>Client</Button></NavLink>
      {'     '}
      <NavLink to='/forms/login/as-instructor'><Button color='primary' style={{fontWeight:'bolder',fontSize:'1.3rem'}}>Instructor</Button></NavLink>
      
      
    </div>
    <Switch>
    <Route exact path='/forms/login/' render={()=><Client login={loginHandle} />} />
    <Route exact path='/forms/login/as-instructor' render={()=><Intructor login={loginHandle} />} />
    </Switch>

    </div>
  );
}


const mapStateToProps = state =>{
  return {
    ...state,

  }
}
    
export default connect(
  mapStateToProps,
    {getClasses,useHistory}
  )(Forms);
