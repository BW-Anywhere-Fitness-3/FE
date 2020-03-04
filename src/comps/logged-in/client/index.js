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
      background-color:rgba(250,250,250,.7);
      padding:50px;
      border:double 3px red;

    }

`;


 



const Client = (props)=> {

const [classes,setClasses] = useState()

useEffect(()=>{


      props.getClasses()
    console.log('in Clients while logged in',props)

    setClasses(props.classes)

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
        <CardImg bottom width="100%" src="/assets/318x180.svg" alt="Card image cap" />
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
 <Media className='classCard'  key={aClass.id}>
      <h2></h2>
        <Media left top href="#">
          <Media  object src={testImg} alt="thumbnail of video" style={{width:'100%',height:'100%'}} />
        </Media>
        <Media body>
          <Media heading>
           <Badge color="danger">Class Name: {aClass.className} </Badge>
          </Media>
            <ListGroup className='modalx'>
      <ListGroupItem>Type: {aClass.type}</ListGroupItem>
      <ListGroupItem>Location: {aClass.location}</ListGroupItem>
      <ListGroupItem>Duration Time({aClass.durationMins}mins)</ListGroupItem>
      <ListGroupItem>Intesity Level: {aClass.intesityLevel}</ListGroupItem>
      <ListGroupItem>Start Time:<small> {aClass.startTime}</small></ListGroupItem>
    </ListGroup>
     <div>
      <label>Attendees</label>
      <input type='number' value={aClass.attendees} disabled/>

       <label>MaxAttendees</label>
      <input type='number' value={aClass.maxAttendees} disabled/>
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
