import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
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
		const dispatch=this.props.dispatch;
		return(
			<div>
				Aloha!!! Kitesurfing is coming!!!
				<div>
					<input value={firstName}
						onChange={(event)=>{
							dispatch(changeFirstName(event.target.value))}
						} />
				</div>

				<div>
					<input value={secondName}
						onChange={(event)=>{
							dispatch(changeSecondName(event.target.value))}
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

const mapStateToProps=(state)=>{
	return{
		firstName:state.firstName,
		secondName:state.secondName
	}
};

const WrappedApp=connect(mapStateToProps)(App);
		

ReactDOM.render(
		<Provider store={store}>
			<WrappedApp />
		</Provider>,document.getElementById('root'));

			
