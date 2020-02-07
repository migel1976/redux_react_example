import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeFirstName,changeSecondName} from '../store/actions';

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
	
export default connect(putStateToProps,putActionsToProps)(App);
	
