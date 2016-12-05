// import { push } from 'react-router-redux'
export const ON_CHECKBOX_CLICK = 'ON_CHECKBOX_CLICK';
export const ADD_PEOPLE = 'ADD_PEOPLE';
export const GET_ALL_PEOPLE = 'GET_ALL_PEOPLE';


import data from '../data'
export function storeAllPeople(allpeople){
  return {type: GET_ALL_PEOPLE,payload:allpeople}
}

export function getAllPeople(){
	return (dispatch) =>{
		dispatch(storeAllPeople(data))
	}
}
// export function toAbout(){
//   return (dispatch) =>{
//     dispatch(push('/about'))
//   }
// }
export function onCheckBoxClick(postID,checkValue){
	console.log(postID,checkValue)
	return {
		type : ON_CHECKBOX_CLICK,
		payload : {postID ,checkValue}
	}
}

export function addPeople(){
	return {
		type : ADD_PEOPLE,
		payload : {
			name : "sagar"
		}
	}
}
