import axios from 'axios'

/*
THIS AXIOS HOOK IS TO BE USED FOR
 EACH AXIOS CALL THAT WILL NEED AUTHENTICATION,IF IT DOES NOT NEED THAT
 THEN PLEASE DO NOT USE THIS IT WILL CAUSE BUGS
*/

export const axiosCall = () =>{
		const token = window.localStorage.getItem('token')

		return axios.create({
	
			baseURL:'https://fitnessanywheregroup3.herokuapp.com'
		})
}


