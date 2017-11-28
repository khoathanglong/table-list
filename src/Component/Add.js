import React from 'react'
import {nameBox, mailBox, phoneBox,addButton, inputLine} from '../Style/Style-Input'
import {addNew} from '../Action/Action'

const Add = ({dispatch}) => {
	let name;
	let email;
	let phone;
	return(
			<form style={inputLine} onSubmit={ event=> {
				event.preventDefault();
				if (name.trim()===""||phone.trim()=="") return false
				dispatch(addNew(name, email,phone))
				return true
			}} >
				<input name='addName' style={nameBox} type="text" placeholder="name" 
				onChange={e=>name=e.target.value} required/>
				<input name='addEmail' style={mailBox} type="email" placeholder="email" onChange={e=>email=e.target.value} required />
				<input name='addPhone' style={phoneBox} type="tel" placeholder="phone number" onChange={e=>phone=e.target.value} required/>	
				<button name='addButton' style={addButton} type="submit">Add New</button>
			</form>
		
	)
}
export default Add