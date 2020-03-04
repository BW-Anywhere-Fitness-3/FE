import React, { Component } from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import {Button,Container,Media} from 'reactstrap'
import {connect} from 'react-redux'
import axios from 'axios'
import {getClassesForClients} from '../../../../ReduxStore/action'
import ShowPickedClass from './showPickedClass/'
 
class ClassesList extends Component {
  constructor(props){
    super(props)
    this.state={
      pickedClass:'',
      classes:'',
      pickedObj:'',
    } 
  }




  componentDidMount(){//CDM START

const token = localStorage.getItem('token')

    
    console.log(this.props)
this.setState({classes:this.props.copyOfClasses})


  }//CDM FINISH




componentDidUpdate(){
// console.log(this.props)


}


classChoice = cl =>{


this.setState({
  pickedObj:this.state.classes.filter(el=>{
    return el.className === this.state.pickedClass
  })
})

}


  render() {
    console.log('classes comp showing props',this.props)
    return (
      <div className="modalx">


        <input list='classes' onChange={(e)=>this.setState({pickedClass:e.target.value})}/>

        <datalist id='classes'>

        {
          this.props.copyOfClasses && this.props.copyOfClasses.map(aClass=>{
              return(
                <option  value={aClass.className} key={aClass.id}/>
                )
          })
        }
        </datalist>

      <ShowPickedClass copyOfClasses={this.props.copyOfClasses} 
       pickedClass={this.state.pickedObj} 
      buttonLabel='Show Picked Class' click={this.classChoice}/>
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
    {getClassesForClients}

  )(ClassesList);
