/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Card,CardBody,Badge,CardTitle,CardImg,ListGroup, ListGroupItem ,Media,CardSubtitle,CardLink,CardText} from 'reactstrap';



const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [class2Show,setClass2Show] = useState()
  const toggle = () => setModal(!modal);


  console.log('finally !!###2',props.classPicked)



  useEffect(()=>{

      setClass2Show(()=>{

          return props.classes.filter(choice=>{
              choice.className !== props.classPicked
          })

      })

  },[])

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>




        






        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
