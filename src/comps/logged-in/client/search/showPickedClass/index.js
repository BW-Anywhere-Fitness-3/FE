  /* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Card,CardBody,Badge,CardTitle,CardImg,ListGroup, ListGroupItem ,Media,CardSubtitle,CardLink,CardText} from 'reactstrap';
import {connect} from 'react-redux'
import {getClasses} from '../../../../../ReduxStore/action'


const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [classes, setClasses] = useState();
  const [pickedClass, setPickedClass] = useState();
  const [class2Show,setClass2Show] = useState()
  const toggle = () => setModal(!modal);


  console.log('finally !!###2',props.pickedClass,props.copyOfClasses)



  useEffect(()=>{
    props.getClasses()

    console.log('iehfoeiheo;heoghehg;oiewhiohoeihgo',props)





     setPickedClass(

       props.copyOfClasses.filter(el=>{
        return el.className === props.pickedClass
      })

      )



  },[])

  return (
    <div>
      <Button color="danger" onClick={()=>{props.click();toggle()}}>{buttonLabel}</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>



{
       props.pickedClass && props.pickedClass.map(go=>{

        return(

            <Media className='classCard'  key={go.id}>
      <h2></h2>
        <Media left top href="#">
          <Media  object src='' alt="thumbnail of video" style={{width:'100%',height:'100%'}} />
        </Media>
        <Media body>
          <Media heading>
           <Badge color="danger">Class Name: {go.className} </Badge>
          </Media>
            <ListGroup className='modalx'>
      <ListGroupItem>Type: {go.type}</ListGroupItem>
      <ListGroupItem>Location: {go.location}</ListGroupItem>
      <ListGroupItem>Duration Time({go.durationMins}mins)</ListGroupItem>
      <ListGroupItem>Intesity Level: {go.intesityLevel}</ListGroupItem>
      <ListGroupItem>Start Time:<small> {go.startTime}</small></ListGroupItem>
    </ListGroup>
     <div>
      <label>Attendees</label>
      <input type='number' value={go.attendees} disabled/>

       <label>MaxAttendees</label>
      <input type='number' value={go.maxAttendees} disabled/>
      </div>
        </Media>
      </Media>

          )
       })   



            


        

}





        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
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
