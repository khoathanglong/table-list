import React from 'react';
import {logo, path,header, name} from '../Style/Style-Logo'

const Header = ()=>{
	return (
		<div className="header" 
		style={header} >
			<div style={logo} >
		        <svg width="32" height="32" style={{backgroundColor:'white'}}>
		          <path fill="grey"  style={path}
		          d="M25.2 32.7h-5.6V15.8c0-1.7-.9-2.6-2.6-2.6H5.9v28.9H.4V7.6h16.7c5.4 0 8.1 2.7 8.1 8.1v17z"/>
		          <path fill="grey"  style={path}
		          d="M10 17h5.6v16.9c0 1.7.9 2.6 2.6 2.6h11.1V7.6h5.6v34.5H18.1c-5.4 0-8.1-2.7-8.1-8.1V17z"/>
		        </svg> 
	        </div>
		    <div style={name}>
		   			 Nord Software
		    </div>	
		</div>
		)
}





export default Header
