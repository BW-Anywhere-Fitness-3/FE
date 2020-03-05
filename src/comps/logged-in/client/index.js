import React, {  useState,useEffect } from 'react';
import {Card,CardBody,Badge,CardTitle,ListGroup, ListGroupItem ,Media,CardText} from 'reactstrap'
import SearchClassesBtn from './search/'
import {connect} from 'react-redux'
import styled from 'styled-components'


import yoga1Img from '../../img/1.jpg'
import yoga2Img from '../../img/5.jpg'

import strength1Img from '../../img/3.jpg'
import strength2Img from '../../img/8.jpg'

import dance1Img from '../../img/7.jpg'
import dance2Img from '../../img/9.jpg'

import gym1Img from '../../img/9.jpg'
import gym2Img from '../../img/6.jpg'

import jog1Img from '../../img/10.jpg'
import jog2Img from '../../img/11.jpg'

import defImg from '../../img/noimage.jpg'
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




@media(max-width:500px){

  .classCard{
    flex-direction:column;
    width:100%;
    padding:10px;
    justify-content:center;
    align-items:center;
  }




}



@media(max-width:900px) and (max-height:500px) and (min-width:500px){
     .classCard{
    flex-direction:column;
    width:100%;
    padding:10px;
    justify-content:center;
    align-items:center;
  }  
}

`;



 const classCardImgs = {boxShadow:'0 0 5px #000',width:'100%',height:'100%',border:'double #FF0400',borderRadius:'10px'}



const Client = (props)=> {


  const [yogaType] = useState([yoga1Img,yoga2Img])
  const [strengthType] = useState([strength1Img,strength2Img])
  const [danceType] = useState([dance1Img,dance2Img])
  const [gymType] = useState([gym1Img,gym2Img])
  const [jogType] = useState([jog1Img,jog2Img])


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
          <CardTitle>{props.loginMessage && props.loginMessage}</CardTitle>
          <CardText>
            {
            localStorage.getItem('firstTime')==='true'?`
            We are Happy to have you!
              check out some classes below, they are 
              created by the Instructors on This Fitness App.
            `: 'MAKE SURE TODAY IS BETTER THAN YESTERDAY!'    
            }
          </CardText>
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
            <h1>Class Feed</h1>
          {

           props.classes && props.classes.map(aClass=>{
    return(
 <Media className='classCard modalx'  key={aClass.id}>
      <h2></h2>
        <Media left top>
          <Media  object src={
            aClass.type.match(/yoga/i) || aClass.type.match(/breath/i)?
            yogaType[Math.floor(Math.random()*yogaType.length)]:
            aClass.type.match(/strength/i) || aClass.type.match(/weight/i)?
            strengthType[Math.floor(Math.random()*strengthType.length)]:
             aClass.type.match(/dance/i) || aClass.type.match(/dancing/i)?
            danceType[Math.floor(Math.random()*danceType.length)]:
             aClass.type.match(/gymnastics/i) || aClass.type.match(/cross/i) || aClass.type.match(/spin/i)?
            gymType[Math.floor(Math.random()*gymType.length)]:
             aClass.type.match(/jog/i) || aClass.type.match(/stamina/i) ?
            jogType[Math.floor(Math.random()*jogType.length)]:
            defImg

          } alt="thumbnail of video" style={classCardImgs} />
        </Media>
        <Media body>
          <Media heading>
           <Badge color="danger" style={{fontWeight:'bolder',color:'azure',WebkitTextFillColor:'azure'}}>Class: {aClass.workoutName} </Badge>
          </Media>
            <ListGroup className='modalx'>
      <ListGroupItem>Type<br />({aClass.type})</ListGroupItem>
      <ListGroupItem>Location<br /><i className='fas fa-map-marker-alt'></i> {aClass.location}</ListGroupItem>
      <ListGroupItem><i className='far fa-clock'></i><br />{aClass.durationMins}mins</ListGroupItem>
      <ListGroupItem>Intesity Level<br /><i className='fas fa-heartbeat'></i>{aClass.intesityLevel}</ListGroupItem>
      <ListGroupItem>Start Time<br /><small style={{color:'blue',WebkitTextFillColor:'blue'}}> {aClass.startTime}</small></ListGroupItem>
    </ListGroup>
     <div className='modalx'>
     <ListGroupItem className="justify-content-between">Attendees<br /><Badge pill color='success'>{aClass.attendees}</Badge></ListGroupItem>
<ListGroupItem className="justify-content-between">Max Attendees<br /><Badge pill color='danger'>{aClass.maxAttendees}</Badge></ListGroupItem>
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
