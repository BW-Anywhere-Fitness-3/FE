  /* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Badge,ListGroup, ListGroupItem ,Media} from 'reactstrap';
import {connect} from 'react-redux'
import {getClasses} from '../../../../../ReduxStore/action'
import {axiosCall} from '../../../../axios/'

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [joinMsg, setJoinMsg] = useState('');
  const toggle = () => setModal(!modal);


  const tyMsg ={
    fontWeight:'bolder',
    WebkitTextFillColor:'green',
    color:'green',
    textShadow:'0 0 5px #000'

  }


const joinClass = (obj) =>{
axiosCall().put(`/api/classes/${obj.id}`,{...obj,attendees:obj.attendees+1}).then(res=>{
  console.log('res to attendence update')
  props.getClasses()
  toggle()
  props.parentToggle()
})
}

  console.log('show picked class component rendered: props,state',props,useState)



  useEffect(()=>{
    props.getClasses()



  },[])

  return (
    <div>
      <Button color="danger" onClick={()=>{props.click();toggle()}}>{buttonLabel}</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className} style={{
              backgroundColor:'#3A3A3C',
              borderTop: '2px solid #FF0400',
              borderBottom:' 4px solid #1F1F1F'
            }}>
        <ModalHeader toggle={toggle} style={{
              boxShadow:'0 0 10px #000',
              backgroundColor:'#3A3A3C',
              borderTop: '2px solid #FF0400',
              borderBottom:' 4px solid #1F1F1F'
            }}>{props.pickedClass.length>0?'Class Card':'No Class Picked'}</ModalHeader>
        <ModalBody style={{
              backgroundColor:'#3A3A3C',
              borderTop: '2px solid #FF0400',
              borderBottom:' 4px solid #1F1F1F'
            }}>



{
       props.pickedClass && props.pickedClass.map(go=>{

        return(

            <Media style={{
              backgroundColor:'#3A3A3C',
            }}  key={go.id}>
      <h2></h2>
        <Media left top href="#">
          <Media  object src='' alt="thumbnail of video" style={{width:'100%',height:'100%'}} />
        </Media>
        <Media body>
          <Media heading>
           <Badge color="danger">Class Name: {go.workoutName} </Badge>
          </Media>
            <ListGroup className='modalx' color='dark'>
      <ListGroupItem style={{backgroundColor:'#1F1F1F',WebkitTextFillColor:'azure',color:'azure'}}>Type: {go.type}</ListGroupItem>
      <ListGroupItem  style={{backgroundColor:'#1F1F1F',WebkitTextFillColor:'azure',color:'azure'}}>Location: {go.location}</ListGroupItem>
      <ListGroupItem  style={{backgroundColor:'#1F1F1F',WebkitTextFillColor:'azure',color:'azure'}}>Duration Time({go.durationMins}mins)</ListGroupItem>
      <ListGroupItem  style={{backgroundColor:'#1F1F1F',WebkitTextFillColor:'azure',color:'azure'}}>Intesity Level: {go.intesityLevel}</ListGroupItem>
      <ListGroupItem  style={{backgroundColor:'#1F1F1F',WebkitTextFillColor:'azure',color:'azure'}}>Start Time:<small> {go.startTime}</small></ListGroupItem>
    </ListGroup>
     <div>
      <label>Attendees</label>
      <input type='number' value={go.attendees} disabled/>

       <label>MaxAttendees</label>
      <input type='number' value={go.maxAttendees} disabled/>

      </div>
      <div>
      <span style={tyMsg}>{joinMsg}</span><br />
      <Button 
      onClick={()=>{setJoinMsg('thanks for joining!');
      setTimeout(()=>joinClass(go),2000)}}>join Class</Button>
      </div>
        </Media>
      </Media>

          )
       })   



            


        

}





        </ModalBody>
        <ModalFooter style={{
              backgroundColor:'#3A3A3C',
              borderTop: '2px solid #FF0400',
              borderBottom:' 4px solid #1F1F1F'
            }}>
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
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
  )(ModalExample);
