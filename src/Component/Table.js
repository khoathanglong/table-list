import React from 'react';
import {titleLine, phoneTitle,mailTitle,nameTitle} from '../Style/Style-DataTitle'
import {nameData,mailData,phoneData,editData,dataLine,edit, del, tableStyle,tableData} from '../Style/Style-DataRow'
import {nameBox, mailBox, phoneBox, save, cancel,groupButton} from '../Style/Style-Input'
import {cancelEdit, saveEdit,editRow,delRow,sortingNAME,sortingEMAIL,sortingPHONE} from '../Action/Action'
//not validate yet

const Line = ({name,email,phone,editing, row, dispatch}) =>{
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
				 
				 	<i style={edit} className="material-icons"  
						onClick={()=> dispatch(editRow(editing,row)) } >mode_edit</i>	
					<i style={del} className="material-icons" 
						onClick={()=> dispatch(delRow(row))} >delete</i>
				
				</div>
			</div>
		</div>
	) : (
		<div>
			<form style={dataLine} action="" 
			onSubmit={event => {event.preventDefault(); 
								dispatch(saveEdit(row, name,email,phone)) }} >
				<input name='editName' style={nameBox} type="text" defaultValue={name}  
					onChange={(event)=> {name=event.target.value;} } required />
				<input name='editEmail' style={mailBox} type="email" defaultValue={email} 
					onChange={(event)=> {email=event.target.value; } } required />
				<input name='editPhone' style={phoneBox} type="tel" defaultValue={phone} 
					onChange={(event)=> {phone=event.target.value;} } required />
				<div style={groupButton}>
					<button name='cancelEdit' style={cancel} 
					onClick={()=>dispatch(cancelEdit(editing,row))}>
						Cancel
					</button>
					<button name='saveEdit' style={save}  type="submit" >Save</button>
				</div>
				
			</form>
			
		</div>
	)
}

 const Table= ({list,dispatch,ascending})=> {
	return (
		<div  style={tableStyle} >
			<div style={titleLine}>
				<div className="name" style={nameTitle} onClick={() =>dispatch(sortingNAME())} >
					<div style={{width:'60px', color:'#505050'}}>
						Name  
						<i className="material-icons" style={{fontSize:'16px',color:'#505050',float:'right'}}>arrow_downward</i>
					</div>
				</div>
				<div className="email" style={mailTitle} onClick={() =>dispatch(sortingEMAIL())} >
					E-mail address
				</div>
				<div className="phone" style={phoneTitle} onClick={() =>dispatch(sortingPHONE())}>
					Phone number
				</div>
			</div>
			<div style={tableData} >
				{list.map((list,i) => <Line key={`${list.email}${i}`} {...list} dispatch={dispatch} row={i} /> )}
			</div>
			
		</div>
		)
}
export default Table