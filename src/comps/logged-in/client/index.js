import React, { Component, useState,useEffect } from 'react';
import {Card,CardBody,Badge,CardTitle,CardImg,ListGroup, ListGroupItem ,Media,CardSubtitle,CardLink,CardText} from 'reactstrap'
import SearchClassesBtn from './search/'
import {connect} from 'react-redux'
import {LoggedContext} from '../../ContextHook/'
import styled from 'styled-components'
import testImg from '../../img/1.jpg'
import {getClasses} from '../../../ReduxStore/action'

const Box = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  grid-gap:100px;
  padding:100px 0px;



    .classCard{
      flex:1;
      background-color: #3A3A3C;
      padding:50px;
      border-top: 2px solid #FF0400;
      border-bottom: 4px solid #1F1F1F;
      box-shadow:0 0 10px;
      border-radius:20px;
    }

`;


 const classCardImgs = {boxShadow:'0 0 5px #000',width:'100%',height:'100%',border:'double #FF0400',borderRadius:'10px'}



const Client = (props)=> {


useEffect(()=>{


      props.getClasses()
    console.log('logged in Client here props, ',props)


},[])





    return (
        
      <div className="user-logged-in-page">
      

         <div className='profileCardHolder'>

<div>
      
      <Card color='dark'>
        <CardBody>
          <CardTitle>{'welcomeMsg'}</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted"></small>
          </CardText>
        </CardBody>
      </Card>
    </div>

    </div>

    <div>
    	<SearchClassesBtn buttonLabel='Search For Classes'
       copyOfClasses={props.classes}  className='dark'/>
    </div>

    		  <Box>

          {

           props.classes && props.classes.map(aClass=>{
    return(
 <Media className='classCard modalx'  key={aClass.id}>
      <h2></h2>
        <Media left top href="#">
          <Media  object src={testImg} alt="thumbnail of video" style={classCardImgs} />
        </Media>
        <Media body>
          <Media heading>
           <Badge color="danger" style={{fontWeight:'bolder'}}>Class: {aClass.className} </Badge>
          </Media>
            <ListGroup className='modalx'>
      <ListGroupItem>Type: {aClass.type}</ListGroupItem>
      <ListGroupItem>Location: {aClass.location}</ListGroupItem>
      <ListGroupItem><i className='far fa-clock'></i>{aClass.durationMins}mins<i className='far fa-clock'></i></ListGroupItem>
      <ListGroupItem>Intesity Level<i className='fas fa-heartbeat'></i>: {aClass.intesityLevel}</ListGroupItem>
      <ListGroupItem>Start Time:<br /><small style={{color:'blue',WebkitTextFillColor:'blue'}}> {aClass.startTime}</small></ListGroupItem>
    </ListGroup>
     <div className='modalx'>
     <ListGroupItem className="justify-content-between">Attendees<Badge pill color='success'>{aClass.attendees}</Badge></ListGroupItem>
<ListGroupItem className="justify-content-between">Max Attendees<Badge pill color='danger'>{aClass.maxAttendees}</Badge></ListGroupItem>
      </div>
        </Media>
      </Media>
      )
  })

          }






      </Box>
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
{getClasses}

  )(Client)
