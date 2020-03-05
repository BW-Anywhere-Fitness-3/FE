import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getClassesForClients} from '../../../../ReduxStore/action'
import ShowPickedClass from './showPickedClass/'
 



   const styleFullMatch = {
              backgroundColor:'#3A3A3C',
            }




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


    
    console.log(this.props)
this.setState({classes:this.props.copyOfClasses})


  }//CDM FINISH






classChoice = cl =>{


this.setState({
  pickedObj:this.state.classes.filter(el=>{
    return el.workoutName === this.state.pickedClass
  })
})

}


  render() {
    console.log('classes comp showing props',this.props)
    return (
      <div className="modalx"  style={styleFullMatch}>


        <input list='classes' onChange={(e)=>this.setState({pickedClass:e.target.value})}/>

        <datalist id='classes'>

        {
          this.props.copyOfClasses && this.props.copyOfClasses.map(aClass=>{
              return(
                <option  value={aClass.workoutName} key={aClass.id}/>
                )
          })
        }
        </datalist>

      <ShowPickedClass copyOfClasses={this.props.copyOfClasses} 
       pickedClass={this.state.pickedObj} 
       parentToggle={this.props.parentToggle}
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
