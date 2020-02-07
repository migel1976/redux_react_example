import {FNAME,SNAME} from '../index';

export const changeFirstName=(newName)=>{
	return{
		type:FNAME,
		payload:newName
	}
};
export const changeSecondName=(newName)=>{
	return{
		type:SNAME,
		payload:newName
	}
};



