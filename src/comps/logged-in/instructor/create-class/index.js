
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from './form/'
const ModalExample = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  const matchStyle = {
    backgroundColor:'#3A3A3C',
    WebkitTextFillColor:'azure',
    color:'azure',
    borderTop:'2px solid #FF0400',
    borderBottom:'4px solid #1F1F1F',
    fontWeight:'bolder',
    boxShadow:'0 0 10px #000'
  }


  const matchh = {
    backgroundColor:'#3A3A3C',
    WebkitTextFillColor:'azure',
    color:'azure',
    fontWeight:'bolder',
    border:'#000'
  }


  return (
    <div className='modalx'>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 400 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle}  className='modalx' style={matchStyle}>
        <ModalHeader toggle={toggle} style={matchStyle}>CREATE A CLASS</ModalHeader>
        <ModalBody  style={matchh}>
        <Form toggle={toggle} refreshClass={props.refreshClass}/>
        </ModalBody>
        <ModalFooter className='modalx'  style={matchh}>
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;