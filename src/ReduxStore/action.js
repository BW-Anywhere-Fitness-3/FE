import React from 'react'
import axios from 'axios'
export const FETCHING = 'FETCHING'
export const GOTCLASSES = 'GOTCLASSES'
export const GOTTOKEN = 'GOTTOKEN'
export const FIRSTTIME = 'FIRSTTIME'
export const MSG = 'MSG'
export const ERR = 'ERR'	
import {axiosCall} from '../comps/axios/'
import {Redirect} from 'react-router-dom'





export const getClasses = () => dispatch =>{
		dispatch({type:FETCHING});

		axiosCall().get("/api/classes").then(classes=>{
				console.log('action to classes',classes.data)
				dispatch({type:GOTCLASSES, payload:classes.data})
		}).catch(err=>{
			console.log(err)
			dispatch({type:ERR,payload:err})
		})
}

const axiosCallCli = () =>{
		const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMCwidXNlcm5hbWUiOiJidWciLCJyb2xlIjoiaW5zdHJ1Y3RvciIsImlhdCI6MTU4MzI2MzkwOSwiZXhwIjoxNTgzMjY3NTA5fQ.tKScilSA-ciE5mwAB3MCzcqx8HkCRsHzWKZRvreD_bU
`
			console.log(token)
		return axios.create({
				headers:{
					"authorization":`${token}`
				},
			baseURL:'https://fitnessanywheregroup3.herokuapp.com'
		})
}

export const getClassesForClients = () => dispatch =>{
		dispatch({type:FETCHING});

		axiosCallCli().get("/api/classes").then(classes=>{
				console.log('action to classes',classes.data)
				dispatch({type:GOTCLASSES, payload:classes.data})
		}).catch(err=>{
			console.log(err)
			dispatch({type:ERR,payload:err})
		})
}




export const LoginClient = () => dispatch =>{
				dispatch({type:FETCHING});
const msg = localStorage.getItem('msg')
const ft = localStorage.getItem('firstTime')
console.log('actions here for client',msg,ft)
		if(msg){
			
           dispatch({type:MSG,payload:window.localStorage.getItem('msg')})
		}

		if(ft){
			
           dispatch({type:FIRSTTIME,payload:window.localStorage.getItem('firstTime')})
		}
            
            
}



export const LoginInstrucotrs = () => dispatch =>{
			dispatch({type:FETCHING});
const msg = localStorage.getItem('msg')
const ft = localStorage.getItem('firstTime')
console.log('actions here for instructor',msg,ft)

		if(msg){
			
           dispatch({type:MSG,payload:window.localStorage.getItem('msg')})
		}

		if(ft){
			
           dispatch({type:FIRSTTIME,payload:window.localStorage.getItem('firstTime')})
		}
            
}
