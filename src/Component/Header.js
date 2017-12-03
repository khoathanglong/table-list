import React from 'react';
import {logo, path,header, name} from '../Style/Style-Logo'

const Header = ()=>{
	return (
		<div className="header" 
		style={header} >
			<div style={logo} >
		        <svg width="32" height="32" style={{backgroundColor:'white'}}>
		          <path fill="#A1ACB6"  style={path}
		          d="M25.2 32.7h-5.6V13.5 H5.9v28.9H.4V7.6h25.2 v25z"/>
		          <path fill="#A1ACB6"  style={path}
		          d="M10 17h5.6v19 h13.1V7.6h5.6v34.5H10V17z"/>
		        </svg> 
	        </div>
		    <div style={name}>
		   			 Nord Software
		    </div>	
		</div>
		)
}





export default Header
