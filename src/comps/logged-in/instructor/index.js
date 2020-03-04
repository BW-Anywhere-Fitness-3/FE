import React, { Component } from 'react';
import { UncontrolledCarousel,Card,CardBody,CardTitle,CardImg,Media,CardSubtitle,CardLink,CardText } from 'reactstrap';
import anywhere from '../../img/1.jpg'
import showthem from '../../img/2.jpg'
import informofequipment from '../../img/3.jpg'
import CreateClass from './create-class/'
import {connect} from 'react-redux'
import {getClasses} from '../../../ReduxStore/action'
import {LoginInstrucotrs,LoginClient} from '../../../ReduxStore/action'
import {Alert,Badge,ListGroupItem} from 'reactstrap'

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
          <CardText>
            <h3>{this.state.firstTimerMSg}</h3>
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

      <Alert color='dark' key={aClass.id} className='modalx'>
      <h2>Class Name: {aClass.className}</h2>
      <ul>
      <li>Type: {aClass.type}</li>
      <li>Location: {aClass.location}</li>
      <li>Duration Time({aClass.durationMins}mins)</li>
      <li>Intesity Level: {aClass.intesityLevel}</li>
      <li>Start Time:<small style={{WebkitTextFillColor:'blue',color:'blue'}}> {aClass.startTime}</small></li>
      </ul>
      <div className='modalx'>
<ListGroupItem className="justify-content-between">Attendees<Badge pill color='success'>{aClass.attendees}</Badge></ListGroupItem>
<ListGroupItem className="justify-content-between">Max Attendees<Badge pill color='danger'>{aClass.maxAttendees}</Badge></ListGroupItem>
      </div>
      </Alert>

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
