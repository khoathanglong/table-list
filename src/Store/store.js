import {createStore} from 'redux';
import appReducer from '../Reducer/appReducer'

const initialList = [{name:'Jone Doe', email:'Jone.dow@gmail.com', phone:'032352352', editing:false},
					{name:'Jone X', email:'JoneXX1.dow@gmail.com', phone:'00113344', editing:true},
					{name:'Jone Y', email:'JoneYY2.dow@gmail.com', phone:'0062352314', editing:false},
					{name:'Jone YZ', email:'JoneYY3.dow@gmail.com', phone:'0062325234', editing:false},
					{name:'Jone YT', email:'JoneYY4.dow@gmail.com', phone:'0062335234', editing:false},
					{name:'Jone YA', email:'JoneYY5.dow@gmail.com', phone:'0064235234', editing:false},
					{name:'Jone YF', email:'JoneYY6.dow@gmail.com', phone:'0065235234', editing:false},
					{name:'Jone YS', email:'JoneYY7.dow@gmail.com', phone:'0066235234', editing:false},
					{name:'Jone YTT', email:'JoneYY8.dow@gmail.com', phone:'0067235234', editing:false},
					{name:'Jone YHH', email:'JoneYY9.dow@gmail.com', phone:'0062835234', editing:false}];

const intialState= {reducer: initialList };
const store = createStore(appReducer, intialState);

export default store