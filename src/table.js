import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { checkDevice } from './action'
import '../bower_components/bootstrap/dist/css/bootstrap.css'
// import Portal from 'react-portal';
import axios from 'axios'
// class Cell extends Component{
// 	constructor(props){
// 		super(props)
// 		this.cellClick = this.cellClick.bind(this);
// 		this.titleChange = this.titleChange.bind(this);
// 		this.check = this.check.bind(this)
// 		// this.state = {title : this.props.cellData.title}

// 	}
// 	cellClick(data){
// 		// this.refs.myPortal.openPortal()
// 		// alert(data)
// 	}
// 	titleChange(event){
// 		this.setState({title: event.target.value});
// 	}
// 	check(data){
// 		console.log(data)
// 	}
	
//   render(){
//   	return (
// 			<tr>
// 			<td>
// 				<input name="device" type="checkbox" onChange={(e) => {this.check(this.props.cellData)}} value="" />
// 			</td>
				
// 				 <td	className="success"  >{this.props.cellData.id}</td>
// 				  <td className="warning" >{this.props.cellData.title}</td>
// 				  <td className="warning" >{this.props.cellData.userId}</td>
// 			</tr>	 
// 	)
//   }
// }

import AddTodo  from './components/row'

// console.log(row)
class Table extends Component{
	constructor(props){
		super(props)
		this.state = {
			cell : []
		}
	}
	componentDidMount() {
			axios.get('https://jsonplaceholder.typicode.com/posts').then((result)=>{
			if(result.data && result.data.length){
				// this.props.tableData = result.data
				var cells = []
    			result.data.forEach((data)=>{
	      			cells.push( <AddTodo  key={data.id} />)
				})
				this.setState({
					cell : cells
				})


			}
		})
	}

	componentWillUnmount() {
	
	}

	render(){
		// console.log(this.props)
		return (
			<div>
				<table className="table">
					<tbody>
						<tr>
							<th></th>
							<th>ID</th>
							<th>Title</th> 
							<th>Userid</th>
						</tr>
				
					</tbody>
  				</table>
				  {this.state.cell}
			</div>
	

		);
	}
}

export default Table

