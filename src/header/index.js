import React from 'react'
import styled from 'styled-components'
import {Button,CardImg} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import logo from '../comps/img/AFLogo.svg'
import {connect} from 'react-redux'





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


class NavBar extends React.Component{


	componentDidMount(){
	
		console.log('headers on mount  props',this.props)
	}



	componentDidUpdate(){
		console.log('headers on update , props',this.props)
			
	}



	render(){
		return (

			<Frame className='navbar'>
			{/*<figure><Img src={logo} style={{flex:'1',height:'100%',width:'100%'}} alt='logo'/></figure>*/}
        <CardImg top style={{flex:'.3',height:'100%',width:'100%'}} src={logo} alt='logo' />
			   {
this.props.headerLogBtn==='Login/Register'?
(/*if they are not logged in*/
<NavLink to='/FE/forms'><Button color='dark' style={loginBtn}>{this.props.headerLogBtn}</Button></NavLink>
)

://or

(/*if they are logged in*/
<NavLink to='/FE/'><Button color='danger' onClick={()=>this.props.logout()}>{this.props.headerLogBtn}</Button></NavLink>
)

}
			</Frame>
			)
}
}

const mapStateToProps = state => {
	return {
		...state
	}
}

export default connect(
	mapStateToProps,
	{}
	)(NavBar);