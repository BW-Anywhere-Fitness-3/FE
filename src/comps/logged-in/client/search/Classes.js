import React, { Component } from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import {Button,Container,Media} from 'reactstrap'
import {connect} from 'react-redux'
import axios from 'axios'
import {getClasses} from '../../../../ReduxStore/action'
import ShowPickedClass from './showPickedClass/'
 
class ClassesList extends Component {
  constructor(props){
    super(props)
    this.state={
      pickedClass:'',

    } 
  }




  componentDidMount(){//CDM START

const token = localStorage.getItem('token')

  
    
    console.log(this.props)


  }//CDM FINISH




componentDidUpdate(){
// console.log(this.props)



}





  render() {
    return (
      <div className="modalx">


        <input list='classes' onChange={(e)=>this.setState({pickedClass:e.target.value})}/>

        <datalist id='classes'>

        {
          this.props.classes.map(aClass=>{
              return(
                <option  value={aClass.className} key={aClass.id}/>
                )
          })
        }
        </datalist>
      <ShowPickedClass classes={this.props.classes} classPicked={this.state.pickedClass} buttonLabel='Show Picked Class'/>
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
    {}

  )(ClassesList);
