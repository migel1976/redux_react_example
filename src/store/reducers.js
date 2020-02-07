import {FNAME,SNAME} from '../index';


const initialStore={
	firstName:'Aloha',
	secondName:'Kitesurfing'
};


export const rootreducer=(state=initialStore,action)=>{
	switch(action.type){
		case FNAME:
			return {...state,firstName:action.payload}
		case SNAME:
			return {...state, secondName:action.payload}
	}
	return state;
};


