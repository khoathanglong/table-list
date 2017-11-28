import {titleLine, phoneTitle,mailTitle,nameTitle} from './Style-DataTitle'
const dataLineHeight = 72;
const lineHeight=24;

const nameData ={
	...nameTitle,
	color:'#505050',
	height:`auto`,
	lineHeight: `${lineHeight}px`,
	fontSize:'16px',	


}
const mailData = {
	...mailTitle,
	color:'#505050',
	height:`auto`,
	lineHeight: `${lineHeight}px`,
	fontSize:'16px',	
	

}
const phoneData = {
	...phoneTitle,
	color:'#505050',
	height:`auto`,
	lineHeight: `${lineHeight}px`,
	fontSize:'16px',	
	
	
}
const editData = {
	display:'inline-block',
	width: '150px',
	marginLeft:'150px',
	lineHeight: `${lineHeight}px`,
	height:`${lineHeight}px`,

}
const edit = { 
	marginLeft:'10px',
	float:'left',
	// fontSize:'16px' : if fontSize is equal that of other data in table line, they will be in one-line. 
	//how to make it in 1 line even if the fontSize is different
	//default fontSize: 24px

}
const del= {
	marginLeft:'40px',
}

const dataLine={
	...titleLine,
	color:'#505050',
	height:`${dataLineHeight}px`,
	lineHeight: `${dataLineHeight}px`,

}
const tableStyle={
	
	width:'912px'
}
export {nameData,mailData,phoneData,editData,dataLine, edit, del, tableStyle}