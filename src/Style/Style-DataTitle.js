import {nameBox, mailBox, phoneBox,addButton, inputLine} from './Style-Input'
const color='#757575';
const fontSize=14;
const lineHeight=16;
const fontWeight=500;
const titleLineHeight=48;


const nameTitle = {
	...nameBox,
	fontSize: `${fontSize}px`,
	lineHeight:`${lineHeight}px`,
	fontWeight:fontWeight,
	height:'auto',
	color:color
}
const mailTitle= {
	...mailBox,
	fontSize: `${fontSize}px`,
	lineHeight:`${lineHeight}px`,
	fontWeight:fontWeight,
	height:'auto',
	color:color

}
const phoneTitle={
	...phoneBox,
	fontSize: `${fontSize}px`,
	lineHeight:`${lineHeight}px`,
	fontWeight:fontWeight,
	height:'auto',
	color:color
}
const editIcon ={
	...addButton,
	fontSize: `${fontSize}px`,
	lineHeight:`${lineHeight}px`,
	fontWeight:fontWeight,
	height:`${titleLineHeight}px`,
	color:color
}
const titleLine={
	...inputLine,
	margin: '2px 0',
	padding:'0',
	height:`${titleLineHeight}px`,
	lineHeight:`${titleLineHeight}px`,
	color:color


}
export {titleLine,editIcon, phoneTitle,mailTitle,nameTitle}