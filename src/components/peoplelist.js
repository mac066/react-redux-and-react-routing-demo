import React from 'react'
import People from './people'
import {Link} from 'react-router'

// import BodyContainer from './BodyContainer'
// import people from '../data'
class PeopleList extends React.Component{
	// constructor(props){
		// super(props)
		// this.state = {
		// 	cell : []
		// }
	// }
	// componentDidMount(){
		// this.props.getAllPeople()
	// }

	render(){
		// var cells = []
		// console.log(this.props.people)
		// if(this.props.people.people){
			//  this.props.people.people.map((item,i)=>{
			// 		cells.push(<People peoplelist={item} key={i} id={i} {...this.props} />)
			// })
			// this.setState({
			// 	cell : cells
			// })
		// }
		return(
			<div>


				 <table className="table">

					<tbody>
					<tr>
					    <th>SN</th>
					    <th>ID</th>
					    <th>Title</th>
					    <th>Userid</th>
					</tr>
					
	        		{this.props.people.people.map((item, i) => <People {...this.props}  peoplelist={item} onClickList={this.props.onCheckBoxClick} key={i} id={i}  />)}

					</tbody>
				</table>
				<Link to="/"> View Details </Link>

			</div>
			
		)
	}
}



export default PeopleList