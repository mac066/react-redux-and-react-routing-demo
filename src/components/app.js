import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../action';
import React from 'react'

class Main extends React.Component{
	componentDidMount(){
		this.props.getAllPeople()
	}
	render() {
	    return (
			<div>
				<p>This is main root container</p>
				{React.cloneElement({...this.props}.children, {...this.props})}
			</div>

	    )
	  }
}

function mapStateToProps(state,ownProps) {
  return {
  	people : state.people.people ? state.people.people : []
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
