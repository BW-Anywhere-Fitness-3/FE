export const FETCHING = 'FETCHING'
export const GOTCLASSES = 'GOTCLASSES'
// export const GOTTOKEN = 'GOTTOKEN'
export const FIRSTTIME = 'FIRSTTIME'
export const loginBtnStateToggle = 'loginBtnStateToggle'
export const MSG = 'MSG'
export const ERR = 'ERR'	
import {axiosCall} from '../comps/axios/'





export const getClasses = () => dispatch =>{
		dispatch({type:FETCHING});

		axiosCall().get("/api/classes").then(classes=>{
				console.log('action- to get classes',classes.data)
				dispatch({type:GOTCLASSES, payload:classes.data})
		}).catch(err=>{
			console.log('action getClasses error',err)
			dispatch({type:ERR,payload:err})
		})
}

// const axiosCallCli = () =>{
// 		const token = JSON.parse(localStorage.getItem("classes"))
// 			console.log('action ',token)
// 		return axios.create({
// 				headers:{
// 					"Authorization":`${token}`
// 				},
// 			baseURL:'https://fitnessanywheregroup3.herokuapp.com'
// 		})
// }

// export const getClassesForClients = () => dispatch =>{
// 		dispatch({type:FETCHING});

// 		axiosCallCli().get("/api/classes").then(classes=>{
// 				console.log('action to classes',classes.data)
// 				dispatch({type:GOTCLASSES, payload:classes.data})
// 		}).catch(err=>{
// 			console.log('action error',err)
// 			dispatch({type:ERR,payload:err})
// 		})
// }




// export const LoginClient = () => dispatch =>{
// 				dispatch({type:FETCHING});
// const msg = localStorage.getItem('msg')
// const ft = localStorage.getItem('firstTime')
// console.log('actions here for client',msg,ft)
// 		if(msg){
			
//            dispatch({type:MSG,payload:window.localStorage.getItem('msg')})
// 		}

// 		if(ft){
			
//            dispatch({type:FIRSTTIME,payload:window.localStorage.getItem('firstTime')})
// 		}
            
            
// }



export const LoginInstrucotrs = () => dispatch =>{
			dispatch({type:FETCHING});
const msg = localStorage.getItem('msg')
const ft = localStorage.getItem('firstTime')
console.log('actions here for instructors login which is shared with all users for now, login msg and first time check',msg,ft)

		if(msg){
			
           dispatch({type:MSG,payload:window.localStorage.getItem('msg')})
		}

		if(ft){
			
           dispatch({type:FIRSTTIME,payload:window.localStorage.getItem('firstTime')})
		}
            
}




export const loginBtnState = () => dispatch =>{
	const oneByOne = async () =>{
				await localStorage.clear()
				await localStorage.setItem('loginBtnState','Login/Register')
			return await 	dispatch({type:loginBtnStateToggle,payload:localStorage.getItem('loginBtnState')})
	}

	oneByOne()
		


 

}


export const logoutBtnState = () => dispatch =>{

	const oneByOne = async () =>{
			await localStorage.setItem('loginBtnState','Logout')
		 await 	dispatch({type:loginBtnStateToggle,payload:localStorage.getItem('loginBtnState')})
		 await 	dispatch({type:MSG,payload:localStorage.getItem('msg')})
	}

	oneByOne()
	

}