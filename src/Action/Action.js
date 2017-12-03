export const addNew = (name, email,phone)=>{
	return (
	{
		type:'ADD_NEW',
		name,email,phone
	})
};

export const editRow = (edit,row) =>{
	return(
	{
		type:'EDIT_ROW',
		edit:edit,
		row
	})
};

export const delRow = (row)=>{
	return(
	{
		type:'DEL_ROW',
		row
	})
};


export const cancelEdit = (edit,row)=>{
	return(
	{
		type:'CANCEL_EDIT',
		edit:edit,
		row
	})
}

export const saveEdit = (row,name,email,phone)=>{
	return {
		type:'SAVE_EDIT',
		row,name, email,phone
	}
}

export const sortingNAME = ()=>{
	return {
		type:'SORTING_NAME',
	}
}
export const sortingEMAIL = ()=>{
	return {
		type:'SORTING_EMAIL',
	}
}
export const sortingPHONE = ()=>{
	return {
		type:'SORTING_PHONE',
	}
}