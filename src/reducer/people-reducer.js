
import data from '../data'

const initialState = {
    people: [],
    checkList: []
};
const people =(state=initialState,action) => {
    // let patchedState = {}

	switch(action.type){
		case "GET_ALL_PEOPLE":
            return Object.assign({},state,{people:data})
        case "ADD_PEOPLE" :
            return [action.payload]
        case "ON_CHECKBOX_CLICK":
            var postId  = action.payload.postID
            var checkValue = action.payload.checkValue
              if(postId){
                var val =  [
                    ...state.people.slice(0,postId), // before the one we are updating
                    {...state.people[postId], checked: checkValue},
                    ...state.people.slice(postId + 1), // after the one we are updating
                ]
                return Object.assign({},state,{people:val})
              }else{
                return state
              }
		default : {
			return state
		}
	}

}

export default people
