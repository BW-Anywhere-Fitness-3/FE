import {GOTCLASSES,FETCHING,ERR,GOTTOKEN,FIRSTTIME,MSG} from './action'


const initialState={
	classes:[],
	error:"",
	loggedOrNot:false,
	firstLogin:false,
	loginMessage:'',
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