import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../action';
import React from 'react'
import People from './people'
import {Link, browserHistory} from 'react-router'

class Main extends React.Component{
	componentDidMount(){
		this.props.getAllPeople()
	}
	evaluateList(){
		let group,UnGroup
		let selected = this.props.people.filter((item)=>{
			return item.checked === true
		})
		selected.forEach((item)=>{
			if(item.deviceType == "Group"){
				group = 1
			}
			if(item.deviceType == "UnGroup"){
				UnGroup = 1
			}
		})
		if(group && UnGroup){
			alert("You can\'n select Group and UnGroup at same time")
			return false
		}
		if(group ||  UnGroup){
			browserHistory.push('/about')
		}
	}
	render() {
	    return (
			<div>
				<p>This is main root container</p>
			 <table className="table">
				<tbody>
				<tr>
				    <th>SN</th>
				    <th>ID</th>
				    <th>Title</th>
				    <th>Userid</th>
						<th>Device Type</th>

				</tr>
        		{
              this.props.people.map((item, i) => <People peoplelist={item} onClickList={this.props.onCheckBoxClick.bind(this)} key={i} id={i}  />)
            }

				</tbody>
			</table>
			<button onClick={this.evaluateList.bind(this)}> About </button>
        {this.props.children}

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
