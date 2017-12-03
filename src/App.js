import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import TableContainer from './Container/TableContainer'
import AddContainer from './Container/AddContainer'
import  tableStyle from './Style/Table-Style'
import titleStyle from './Style/Title-Style'
import headerStyle from './Style/HeaderStyle'
import appStyle from './Style/AppBackground'

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}  >
        <Header style={headerStyle}/>
        <div style={tableStyle} >
        <h1 style={titleStyle} >List of participants</h1>
        	<AddContainer />
        	<TableContainer />
        </div>
        	
      </div>
    )
  }
}

export default App;

