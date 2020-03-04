import React from 'react'
import styled from 'styled-components'
import {Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'


const Frame = styled.div`

flex:1;
display:flex;
justify-content:space-between;
align-items:center;
height:100px;
border-bottom:double 3px #000;
margin-bottom:100px;
background-color:#000;
border-bottom:solid red;
-webkit-text-fill-color:azure;
color:azure;
`;


const loginBtn = {fontWeight:'bolder',fontSize:'1.3rem',WebkitTextFillColor:'azure',color:"azure",border:'double .5px #FF0400',boxShadow:'0 0 5px #222'}
const logoutBtn = {fontWeight:'bolder',fontSize:'1.3rem',border:'#FF0400',border:'double .5px #FF0400'}


class NavBar extends React.Component{
	constructor(props){
		super(props)
			
	}


	render(){
		return (

			<Frame className='navbar'>
			<span>AnyWhere Fitness</span>

			   {
this.props.usersState==='Login/Register'?
(/*if they are not logged in*/
<NavLink to='/forms'><Button color='dark' style={loginBtn}>{this.props.usersState}</Button></NavLink>
)

://or

(/*if they are logged in*/
<NavLink to='/'><Button color='danger' onClick={()=>this.props.logout()}>{this.props.usersState}</Button></NavLink>
)

}
			</Frame>
			)
}
}


export default NavBar;