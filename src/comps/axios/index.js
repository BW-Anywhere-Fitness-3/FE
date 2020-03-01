import axios from 'axios'

/*
THIS AXIOS HOOK IS TO BE USED FOR
 EACH AXIOS CALL THAT WILL NEED AUTHENTICATION,IF IT DOES NOT NEED THAT
 THEN PLEASE DO NOT USE THIS IT WILL CAUSE BUGS
*/

export const axiosCall = () =>{
		const token = localStorage.getItem('token')

		return axios.create({
			headers:{
				authorization:token
			},
			baseURL:'http://localhost:5000'
		})
}