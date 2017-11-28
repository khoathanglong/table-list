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

export const saveEdit = (row)=>{
	return(
	{
		type:'SAVE_EDIT',
		row
	})
}
export const cancelEdit = (edit,row)=>{
	return(
	{
		type:'CANCEL_EDIT',
		edit:edit,
		row
	})
}

export const onChange = (row,name,email,phone)=>{
	return {
		type:'ON_CHANGE',
		row,name, email,phone
	}
}
