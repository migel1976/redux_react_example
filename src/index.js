import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,bindActionCreators} from 'redux';
import {connect, Provider} from 'react-redux';

const initialStore={
	firstName:'Aloha',
	secondName:'Kitesurfing'
};

const FNAME='FNAME';
const changeFirstName=(newName)=>{
	return{
		type:FNAME,
		payload:newName
	}
};


const SNAME='SNAME';
const changeSecondName=(newName)=>{
	return{
		type:SNAME,
		payload:newName
	}
};

const rootreducer=(state=initialStore,action)=>{
	switch(action.type){
		case FNAME:
			return {...state,firstName:action.payload}
		case SNAME:
			return {...state, secondName:action.payload}
	}
	return state;
};

const store=createStore(rootreducer);


class App extends React.Component{
	render(){
		const {firstName,secondName}=this.props;
		const {changeFirstName,changeSecondName}=this.props;
		return(
			<div>
				Aloha!!! Kitesurfing is coming!!!
				<div>
					<input value={firstName}
						onChange={(event)=>{
							changeFirstName(event.target.value)}
						} />
				</div>

				<div>
					<input value={secondName}
						onChange={(event)=>{
							changeSecondName(event.target.value)}
						} />
				</div>
				<div>
					{this.props.firstName + ' ' + this.props.secondName}
				</div>
				<div>
					{`${this.props.firstName} ${this.props.secondName}`}
				</div>
				<div>
					{`${firstName} ${secondName}`}
				</div>
			</div>
	)
	}
};

const putStateToProps=(state)=>{
	return{
		firstName:state.firstName,
		secondName:state.secondName
	}
};

const putActionsToProps=(dispatch)=>{
	return{
		changeFirstName:bindActionCreators(changeFirstName,dispatch),
		changeSecondName:bindActionCreators(changeSecondName,dispatch)
	}
};
	
const WrappedApp=connect(putStateToProps,putActionsToProps)(App);
		

ReactDOM.render(
		<Provider store={store}>
			<WrappedApp />
		</Provider>,document.getElementById('root'));

			
