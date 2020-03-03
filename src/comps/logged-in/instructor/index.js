import React, { Component } from 'react';
import { UncontrolledCarousel,Card,CardBody,CardTitle,CardImg,Media,CardSubtitle,CardLink,CardText } from 'reactstrap';
import anywhere from '../../img/1.jpg'
import showthem from '../../img/2.jpg'
import informofequipment from '../../img/3.jpg'
import CreateClass from './create-class/'
import {connect} from 'react-redux'

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
}



  componentDidMount(){//CDM START



  }//CDM FINISH









  render() {
    return (
      <div className="">
        <h1>Welcome Instructor</h1>
<div>
      <Card color='dark'>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
        <UncontrolledCarousel items={items} className='controlAnyway'/>

        <div>
        <CreateClass buttonLabel='Create A Class Here' />
        </div>

      </div>
    );
  }
}


const mapStateToProps = state =>{
  return {
    ...state
  }
}

export default connect(
  mapStateToProps,
  {}
  )(Instructors);
