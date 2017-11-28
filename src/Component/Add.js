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
				dispatch(addNew(name, email,phone))
			}} >
				<input name='addName' style={nameBox} type="text" placeholder="name" onChange={e=>name=e.target.value} required/>
				<input name='addEmail' style={mailBox} type="email" placeholder="email" onChange={e=>email=e.target.value} required />
				<input name='addPhone' style={phoneBox} type="tel" placeholder="phone number" onChange={e=>phone=e.target.value} required/>	
				<input name='addButton' style={addButton} type="submit" value="Add New" />
			</form>
		
	)
}
export default Add