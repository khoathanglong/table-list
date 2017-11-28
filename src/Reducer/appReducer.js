import {combineReducers} from 'redux';

const reducer = (state=[], action)=>{
	let nextState=state.slice();
		if (action.type=== 'ADD_NEW'){
			return [...state, {name:action.name, phone:action.phone, email:action.email, editing:false}];
		}
		else if (action.type=== 'EDIT_ROW'||action.type==='CANCEL_EDIT'){		
			let selectedRow= state.slice(action.row,action.row+1);
			let editedRow={...selectedRow[0],editing:!action.edit};
			nextState.splice(action.row, 1, editedRow)
			return nextState;
		}
		else if(action.type=== 'DEL_ROW'){
			nextState.splice(action.row,1);
			return nextState;
		}
		else if(action.type==='ON_CHANGE'||action.type==='SAVE_EDIT'){
			let newRow={name:action.name,phone:action.phone,email:action.email,editing:false};
			nextState.splice(action.row, 1, newRow);
			return nextState;
		}
		else
			return state
}

const appReducer = combineReducers ({reducer});
export default appReducer