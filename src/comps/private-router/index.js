import React from 'react'
import {Route, Redirect} from 'react-router-dom'

/*
THIS IS A PRIVATE ROUTER METHOD FROM REACT ROUTER DOM THAT IM GONNA USE 
TO GIVE ME A HAND ON KEEPING PAGES PRIVATE IN NEED OF AUTHENTICATION
*/


export const PrivateRoute = ({component:Component, ...rest}) =>{
				const token = window.localStorage.getItem('token')

				return(
					<Route render={(props)=>{
						if(token){
							return <Component {...props}/>
						}else{
							return <Redirect to='/FE/' />
						}
					}}  />

					)
}