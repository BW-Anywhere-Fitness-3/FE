import React, { Component } from 'react';
import {NavLink,Switch,Route} from 'react-router-dom'
import {Button,Container,Media} from 'reactstrap'
import {connect} from 'react-redux'
import axios from 'axios'
import {getClasses} from '../../../../ReduxStore/action'


class ClassesList extends Component {
  constructor(props){
    super(props)
    this.state={
      classes:[]
    } 
  }




  componentDidMount(){//CDM START

const token = localStorage.getItem('token')

    // axios.get("https://fitnessanywheregroup3.herokuapp.com/api/classes/").then(classes=>{
    //     console.log('action to classes',classes.data)
    //     this.setState({
    //       classes:classes.data
    //     })
    // }).catch(err=>{
    //   console.log(err)
    // })
    


  }//CDM FINISH




componentDidUpdate(){
// console.log(this.props)



}




  render() {
    return (
      <div className="modalx">


        <input list='classes'/>

        <datalist id='classes'>
        <option  value='fffrfrf'/>
        <option  value='fffrfrf'/>
        <option  value='fffrfrf'/>
        <option  value='fffrfrf'/>
        <option  value='fffrfrf'/>
        <option  value='fffrfrf'/>
        <option  value='fffrfrf'/>
        </datalist>
      
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
