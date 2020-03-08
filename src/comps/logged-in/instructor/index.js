import React, { Component } from 'react';
import { UncontrolledCarousel,Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import anywhere from '../../img/1.jpg'
import showthem from '../../img/2.jpg'
import informofequipment from '../../img/3.jpg'
import CreateClass from './create-class/'
import {connect} from 'react-redux'
import {getClasses} from '../../../ReduxStore/action'
import {LoginInstrucotrs,LoginClient} from '../../../ReduxStore/action'
import {Alert,Badge,Button,ListGroupItem} from 'reactstrap'
import {axiosCall} from '../../axios/'


const items = [
  {
src:showthem,
    altText: 'Slide 1',
    caption: 'Lead By Example',
    header: 'Show your clients how to properly go through your movements of training.',
    key: '1'
  },
  {
src: informofequipment,
    altText: 'Slide 2',
    caption: 'Inform your clients',
    header: 'Be sure to let your clients know what to have for each exercise(if needed).',
    key: '2'
  },
  {
src: anywhere,
    altText: 'Slide 3',
    caption: 'Anywhere',
    header: 'Literally have your classes joined any time anywhere.',
    key: '3'
  }
];

class Instructors extends Component {
constructor(props){
  super(props)
  this.state={
      firstTimerMSg:''
  }


 this.deleteClass = this.deleteClass.bind(this)
 this.refreshClass = this.refreshClass.bind(this)
}



  componentDidMount(){//CDM START
    console.log('logged in instructor here , props, state',this.props,this.state)
    this.props.getClasses()

  }//CDM FINISH





componentDidUpdate(){
  console.log('logged in intructor here',this.props)



}


 refreshClass=()=>{
    this.props.getClasses()
  }

deleteClass(id){
  if(this.props.loginMessage===localStorage.getItem('msg'))
{

 return axiosCall().delete(`/api/classes/${id}`).then(res=>{
    console.log(res)
    this.refreshClass()
  })

}
 

}

  render() {
    return (
      <div className="" onLoad={()=>{  if(this.props.firstLogin==='true'){
    this.setState({firstTimerMSg:'read around to see what you can do since its your fist time.'})
  }}}>



       
<div>
      <Card color='dark'>
        <CardBody>
          <CardTitle>{this.props.loginMessage && this.props.loginMessage}</CardTitle>
          <CardSubtitle><h1>intructor Panel</h1></CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText style={{fontSize:'2rem'}}>
            {this.state.firstTimerMSg}
          </CardText>
        </CardBody>
      </Card>
    </div>
        <UncontrolledCarousel items={items} className='controlAnyway'/>

        <div>
        <CreateClass buttonLabel='Create A Class Here' refreshClass={this.refreshClass} classes={this.props.classes}/>
        </div>
<div>
<h1>CLASS FEED</h1>
{

  this.props.classes.map(aClass=>{
    return(
      <div key={aClass.id} >
      <Alert color='Dark' className='alrt'>
      <Button color='danger' onClick={()=>{this.deleteClass(aClass.id)}} style={{
        position:'relative',
        float:'left',
        left:'0'
      }}><i className='fas fa-window-close'></i></Button>
      <h2>Class Name: {aClass.workoutName}</h2>
      <ul>
      <li>Type: {aClass.type}</li>
      <li>Location: {aClass.location}</li>
      <li>Duration Time({aClass.durationMins}mins)</li>
      <li>Intensity Level: {aClass.intensityLevel}</li>
      <li>Start Time:<small > {aClass.startTime}</small></li>
      </ul>
      <div className='modalx'>
<ListGroupItem className="justify-content-between atn">Attendees<Badge pill color='success'>{aClass.attendees}</Badge></ListGroupItem>
<ListGroupItem className="justify-content-between atn">Max Attendees<Badge pill color='danger'>{aClass.maxAttendees}</Badge></ListGroupItem>
      </div>
      </Alert>
      </div>
      )
  })
}


</div>
      </div>
    );
  }
}


const mapStateToProps = state =>{
  return {
    ...state,
  }
}

export default connect(
  mapStateToProps,
  {getClasses,LoginInstrucotrs,LoginClient}
  )(Instructors);
