import {createStore} from 'redux';
import reducer from '../Reducer/appReducer'

const initialList = [{name:'Q one Doe', email:'Jone.dow@gmail.com', phone:'032352352', editing:true},
					{name:'W Jone Y', email:'JoneYY2.dow@gmail.com', phone:'0062352314', editing:false},
					{name:'E CJone YZ', email:'JoneYY3.dow@gmail.com', phone:'0062325234', editing:false},
					{name:'R SJone YT', email:'JoneYY4.dow@gmail.com', phone:'0062335234', editing:false},
					{name:'T THJone YF', email:'JoneYY6.dow@gmail.com', phone:'0065235234', editing:false},
					{name:'Y KJone YS', email:'JoneYY7.dow@gmail.com', phone:'0066235234', editing:false},
					{name:'U QJone YTT', email:'JoneYY8.dow@gmail.com', phone:'0067235234', editing:false},
					{name:'I XJone YHH', email:'Jo4neYY9.dow@gmail.com', phone:'0062835234', editing:false},
					{name:'O WJone Doe', email:'J9one.dow@gmail.com', phone:'032352352', editing:false},
					{name:'P QHAJone Y', email:'J8oneYY2.dow@gmail.com', phone:'0062352314', editing:false},
					{name:'A BKone YZ', email:'J6oneYY3.dow@gmail.com', phone:'0062325234', editing:false},
					{name:'S PSJone YT', email:'J5oneYY4.dow@gmail.com', phone:'0062335234', editing:false},
					{name:'D HTHJone YF', email:'J4oneYY6.dow@gmail.com', phone:'0065235234', editing:false},
					{name:'F GKJone YS', email:'J1oneYY7.dow@gmail.com', phone:'0066235234', editing:false},
					{name:'G KQJone YTT', email:'J2oneYY8.dow@gmail.com', phone:'0067235234', editing:false},
					{name:'H AJone YHH', email:'J3oneYY9.dow@gmail.com', phone:'0062835234', editing:false},
					{name:'J EHTHJone YF', email:'J4oneYY6.dow@gmail.com', phone:'0065235234', editing:false},
					{name:'X UIKQJone YTT', email:'J2oneYY8.dow@gmail.com', phone:'0067235234', editing:false},
					{name:'Z YXJone YHH', email:'J3oneYY9.dow@gmail.com', phone:'0062835234', editing:false},];

const intialState= {list: initialList, ascendingNAME:false,ascendingEMAIL:false,ascendingPHONE:false };
const store = createStore(reducer, intialState);

export default store