import React from 'react'
import {Link} from 'react-router'

export default class Profile extends React.Component{
	render(){
		return(
			<div>
				<h1> this is profile </h1>
				<Link to="/detail">View Details</Link>
        		{this.props.children}

			</div>
		)
	}
}