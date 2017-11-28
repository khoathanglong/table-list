

const reducer = (state={list:[], ascending:false}, action)=>{
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
		else if(action.type==='SORTING'){
			nextState.sort(function(a,b){
				let first =a.name.toUpperCase();
				let second= b.name.toUpperCase(); //ignore upper case
				if( action.ascending===false){
					if (first>second){
						return 1
					}
					if (first<second){
						return -1
					}
					action.ascending=true;
				}
				else{
					if (first>second){
						return -1
					}
					if (first<second){
						return 1
					}
					action.ascending=false;
				}
				return 0	
			})
			return {...state,list:nextState}
		}
		else
			return state
}



export default reducer