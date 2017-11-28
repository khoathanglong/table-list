import React from 'react';
import {titleLine, phoneTitle,mailTitle,nameTitle} from '../Style/Style-DataTitle'
import {nameData,mailData,phoneData,editData,dataLine,edit, del, tableStyle} from '../Style/Style-DataRow'
import {nameBox, mailBox, phoneBox,addButton, save, cancel} from '../Style/Style-Input'
import {cancelEdit, saveEdit, onChange,editRow,delRow} from '../Action/Action'
//not validate yet

const Line = ({name,email,phone,editing, handleCancel, row, dispatch}) =>{
	return !editing ? 
	(
		<div style={dataLine} >
			<div>
				<div className="name" style={nameData}> 
					{name} 
				</div>
				<div className="email" style={mailData}> {email} </div>
				<div className="phone" style={phoneData}> {phone} </div>
				<div style={editData}>
					<i style={edit} className="material-icons"  fill="#909090" 
					onClick={()=> dispatch(editRow(editing,row)) } >mode_edit</i>	
					<i style={del} className="material-icons" 
					onClick={()=> dispatch(delRow(row))} fill="#909090">delete</i>
				</div>
			</div>
		</div>
	) : (
		<div>
			<form style={dataLine} action="" 
			onSubmit={event => {event.preventDefault(); 
								dispatch(onChange(row, name,email,phone)) }} >
				<input name='editName' style={nameBox} type="text" defaultValue={name}  
					onChange={(event)=> {name=event.target.value;} } required />
				<input name='editEmail' style={mailBox} type="email" defaultValue={email} 
					onChange={(event)=> {email=event.target.value; } } required />
				<input name='editPhone' style={phoneBox} type="tel" defaultValue={phone} 
					onChange={(event)=> {phone=event.target.value;} } required />
				<div style={addButton}>
					<button name='cancelEdit' style={cancel} onClick={()=>dispatch(cancelEdit(editing,row))}>Cancel</button>
					<button name='saveEdit' style={save}  type="submit" >Save</button>
				</div>
				
			</form>
			
		</div>
	)
}

 const Table= ({list,dispatch})=> {
	return (
		<div  style={tableStyle} >
			<div style={titleLine}>
				<div className="name" style={nameTitle} >Name  
					<i className="material-icons" style={{fontSize:'0.8em',color:'grey'}}> arrow_downward</i>
				</div>
				<div className="email" style={mailTitle} >E-mail address</div>
				<div className="phone" style={phoneTitle}>Phone number</div>
			</div>
			{list.map((list,i) => <Line key={`${list.email}${i}`} {...list} dispatch={dispatch} row={i} /> )}
		</div>
		)
}
export default Table