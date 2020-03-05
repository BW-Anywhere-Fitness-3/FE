/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Classes from './Classes'
import {connect} from 'react-redux'
import {getClassesForClients} from '../../../../ReduxStore/action'

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }



  const styleMatch = {
              backgroundColor:'#3A3A3C',

            }

  return (
    <div>

<Button color="danger" style={{fontWeight:'bolder'}}onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle}  style={styleMatch}>
        <ModalHeader toggle={toggle}  style={styleMatch}>Modal title</ModalHeader>
        <ModalBody  style={styleMatch}>
            <Classes copyOfClasses={props.copyOfClasses}/>
        </ModalBody>
        <ModalFooter  style={styleMatch}>
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
  {getClassesForClients}
  )(ModalExample);
