import {GOTCLASSES,FETCHING,ERR,GOTTOKEN,FIRSTTIME,MSG,loginBtnStateToggle} from './action'


const initialState={
	classes:[],
	error:"",
	loggedOrNot:false,
	firstLogin:false,
	loginMessage:localStorage.getItem('msg'),
	headerLogBtn:localStorage.getItem('loginBtnState')||'Login/Register',

}



const reducer = (state = initialState, action) =>{

			switch(action.type){
				case FETCHING:
					return {
						...state,
					}

				case GOTCLASSES:
				return {
					...state,
					classes:action.payload,
				}


				case FIRSTTIME:
				return {
					...state,
					firstLogin:action.payload,
				}


				case MSG:
				return {
					...state,
					loginMessage:action.payload,
				}


				case loginBtnStateToggle:
				return {
					...state,
					headerLogBtn:action.payload,
				}

				case ERR:
				return {
					...state,
					error:action.payload,
				}

				default:
				return state
			}
}





export default reducer