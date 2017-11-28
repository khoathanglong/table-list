import {createStore} from 'redux';
import reducer from '../Reducer/appReducer'

const initialList = [{name:'Jone Doe', email:'Jone.dow@gmail.com', phone:'032352352', editing:false},
					{name:'HAJone Y', email:'JoneYY2.dow@gmail.com', phone:'0062352314', editing:false},
					{name:'Jone YZ', email:'JoneYY3.dow@gmail.com', phone:'0062325234', editing:false},
					{name:'SJone YT', email:'JoneYY4.dow@gmail.com', phone:'0062335234', editing:false},
					{name:'THJone YF', email:'JoneYY6.dow@gmail.com', phone:'0065235234', editing:false},
					{name:'KJone YS', email:'JoneYY7.dow@gmail.com', phone:'0066235234', editing:false},
					{name:'QJone YTT', email:'JoneYY8.dow@gmail.com', phone:'0067235234', editing:false},
					{name:'XJone YHH', email:'Jo4neYY9.dow@gmail.com', phone:'0062835234', editing:false},
					{name:'WJone Doe', email:'J9one.dow@gmail.com', phone:'032352352', editing:false},
					{name:'QHAJone Y', email:'J8oneYY2.dow@gmail.com', phone:'0062352314', editing:false},
					{name:'JKone YZ', email:'J6oneYY3.dow@gmail.com', phone:'0062325234', editing:false},
					{name:'PSJone YT', email:'J5oneYY4.dow@gmail.com', phone:'0062335234', editing:false},
					{name:'HTHJone YF', email:'J4oneYY6.dow@gmail.com', phone:'0065235234', editing:false},
					{name:'GKJone YS', email:'J1oneYY7.dow@gmail.com', phone:'0066235234', editing:false},
					{name:'KQJone YTT', email:'J2oneYY8.dow@gmail.com', phone:'0067235234', editing:false},
					{name:'XJone YHH', email:'J3oneYY9.dow@gmail.com', phone:'0062835234', editing:false},
					{name:'EHTHJone YF', email:'J4oneYY6.dow@gmail.com', phone:'0065235234', editing:false},
					{name:'UIKQJone YTT', email:'J2oneYY8.dow@gmail.com', phone:'0067235234', editing:false},
					{name:'YXJone YHH', email:'J3oneYY9.dow@gmail.com', phone:'0062835234', editing:false},];

const intialState= {list: initialList, ascending:false };
const store = createStore(reducer, intialState);

export default store