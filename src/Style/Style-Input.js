const width=150;
const emailWidth=width*1.5;
const phoneWidth=width*1.2;
const lineWidth=912;

const button = {
	padding:'0',
	display:'inline-block',
	height:'40px',
	width: `${width}px` ,
}
export const nameBox={
	...button,
	marginLeft:'16px'
}
export const mailBox={
	...button,
	marginLeft:'16px',
	width:`${emailWidth}px`
}
export const phoneBox={
	...button,
	marginLeft:'16px',
	width:`${phoneWidth}px`
}
export const addButton={
	...button,
	padding:'0px',
	marginLeft:`${lineWidth-width*2-emailWidth-phoneWidth-16*4}px`,	
	verticalAlign:'middle'
}
	export const save ={
		...addButton,
		background:'#07f',
		color:'#ffffff',
		fontSize:'16px',
		fontWeight:'500',
		width: `${width/2}px`,
		display:'inline-block',
		marginLeft:'1px',
	}
	export const cancel ={
		...save,
		marginLeft:'-20px',
		background:'#d9d9d9',
		color:'#07f'

	}

export const inputLine = {
	padding:'16px 0 16px 0',
	height: '40px',
	width:`${lineWidth}px` ,
	backgroundColor:'white',
}