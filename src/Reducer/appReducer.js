

const reducer = (state={list:[], ascendingNAME:false,ascendingEMAIL:false,ascendingPHONE:false}, action)=>{
	let nextState=state.list.slice();
		if (action.type=== 'ADD_NEW'){
			return {...state,
					list:[...state.list, {name:action.name,phone:action.phone,email:action.email,editing:false}],
					};
		}
		else if (action.type=== 'EDIT_ROW'||action.type==='CANCEL_EDIT'){		
			let selectedRow= state.list.slice(action.row,action.row+1);
			let editedRow={...selectedRow[0],editing:!action.edit};
			nextState.splice(action.row, 1, editedRow)
			return {...state,list:nextState} ;
		}
		else if(action.type=== 'DEL_ROW'){
			nextState.splice(action.row,1);
			return {...state,list:nextState};
		}
		else if(action.type==='SAVE_EDIT'){
			let newRow={name:action.name,email:action.email,phone:action.phone,editing:false};
			nextState.splice(action.row, 1, newRow);
			return {...state, list:nextState};
		}
		else if(action.type==='SORTING_NAME'){
				state.ascendingNAME=!state.ascendingNAME
				nextState.sort((a,b)=>{
					let first =a.name.toUpperCase();
					let second= b.name.toUpperCase();
					return (state.ascendingNAME? first>second :first<second)
				} )
			return {...state,list:nextState}
		}
		else if(action.type==='SORTING_EMAIL'){
			state.ascendingEMAIL=!state.ascendingEMAIL
				nextState.sort((a,b)=>{
					let first =a.email.toUpperCase();
					let second= b.email.toUpperCase();
					return (state.ascendingEMAIL? first>second :first<second)
				} )
			return {...state,list:nextState}	
		}
		else if(action.type==='SORTING_PHONE'){
			state.ascendingPHONE=!state.ascendingPHONE
				nextState.sort((a,b)=>{
					let first =Number(a.phone);
					let second= Number(b.phone);
					return (state.ascendingPHONE? first-second :second-first)
				} )
			return {...state,list:nextState}
		}
		else
			return state
}



export default reducer