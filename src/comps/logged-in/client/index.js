import React, { Component, useContext,useEffect } from 'react';
import {Card,CardBody,Badge,CardTitle,CardImg,ListGroup, ListGroupItem ,Media,CardSubtitle,CardLink,CardText} from 'reactstrap'
import SeeClassesBtn from './search/'
import {connect} from 'react-redux'
import {LoggedContext} from '../../ContextHook/'
import styled from 'styled-components'
import testImg from '../../img/1.jpg'


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
      background-color:rgba(250,250,250,.7);
      padding:50px;
      border:double 3px red;

    }

`;






const Client = (props)=> {



useEffect(()=>{

    console.log(props)


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
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
        <CardImg bottom width="100%" src="/assets/318x180.svg" alt="Card image cap" />
      </Card>
    </div>

    </div>

    <div>
    	<SeeClassesBtn buttonLabel='Search For Classes'  className='dark'/>
    </div>

    		  <Box>
 <Media className='classCard'>
        <Media left top href="#">
          <Media  object src={testImg} alt="thumbnail of video" style={{width:'100%',height:'100%'}} />
        </Media>
        <Media body>
          <Media heading>
           <Badge color="danger"> Name of Class </Badge>
          </Media>
            <ListGroup className='modalx'>
      <ListGroupItem>duration: 23min</ListGroupItem>
      <ListGroupItem>type: dance</ListGroupItem>
      <ListGroupItem>start time: 12pm</ListGroupItem>
      <ListGroupItem>location: Maryland</ListGroupItem>
      <ListGroupItem>intensity level: 80%</ListGroupItem>
      <ListGroupItem>attendees: 31</ListGroupItem>
      <ListGroupItem>max attendees: 50</ListGroupItem>
    </ListGroup>

        </Media>
      </Media>








 <Media className='classCard'>
        <Media left top href="#">
          <Media  object src={testImg} alt="thumbnail of video" style={{width:'100%',height:'100%'}} />
        </Media>
        <Media body>
          <Media heading>
           <Badge color="danger"> Name of Class </Badge>
          </Media>
            <ListGroup className='modalx'>
      <ListGroupItem>duration: 23min</ListGroupItem>
      <ListGroupItem>type: dance</ListGroupItem>
      <ListGroupItem>start time: 12pm</ListGroupItem>
      <ListGroupItem>location: Maryland</ListGroupItem>
      <ListGroupItem>intensity level: 80%</ListGroupItem>
      <ListGroupItem>attendees: 31</ListGroupItem>
      <ListGroupItem>max attendees: 50</ListGroupItem>
    </ListGroup>
    
        </Media>
      </Media>





       <Media className='classCard'>
        <Media left top href="#">
          <Media  object src={testImg} alt="thumbnail of video" style={{width:'100%',height:'100%'}} />
        </Media>
        <Media body>
          <Media heading>
           <Badge color="danger"> Name of Class </Badge>
          </Media>
            <ListGroup className='modalx'>
      <ListGroupItem>duration: 23min</ListGroupItem>
      <ListGroupItem>type: dance</ListGroupItem>
      <ListGroupItem>start time: 12pm</ListGroupItem>
      <ListGroupItem>location: Maryland</ListGroupItem>
      <ListGroupItem>intensity level: 80%</ListGroupItem>
      <ListGroupItem>attendees: 31</ListGroupItem>
      <ListGroupItem>max attendees: 50</ListGroupItem>
    </ListGroup>
    
        </Media>
      </Media>
      </Box>
      </div>

    );
}



export default Client
