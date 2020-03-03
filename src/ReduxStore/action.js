import React from 'react'
import axios from 'axios'
export const FETCHING = 'FETCHING'
export const GOTCLASSES = 'GOTCLASSES'
export const GOTTOKEN = 'GOTTOKEN'
export const ERR = 'ERR'	
import {axiosCall} from '../comps/axios/'
import {Redirect} from 'react-router-dom'





export const getClasses = () => dispatch =>{
		dispatch({type:FETCHING});
const token = localStorage.getItem('token')

		axiosCall().get("https://fitnessanywheregroup3.herokuapp.com/api/classes/",token).then(classes=>{
				console.log('action to classes',classes.data)
				dispatch({type:GOTCLASSES, payload:classes.data})
		}).catch(err=>{
			console.log(err)
			dispatch({type:ERR,payload:err})
		})
}




export const LoginClient = () => dispatch =>{
		dispatch({type:FETCHING});
const token = localStorage.getItem('token')

		if(window.localStorage.getItem('token')){
			
         return  dispatch({type:GOTTOKEN,payload:JSON.parse(window.localStorage.getItem('token'))})
		}
            
}