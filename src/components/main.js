import React from 'react';
// import { Link } from 'react-router';
import PeopleList from './peoplelist'
// {React.cloneElement({...this.props}.children, {...this.props})}


class Main extends React.Component{
	componentDidMount(){
		this.props.getAllPeople()
	}
	// renderTables() {
 //        if (this.props.people && Object.keys(this.props.people).length) {
		// console.log(this.props.people)
    //         return ( <PeopleList data={this.props.people} {...this.props}/>);
    //     }

    //     return null;
    // }

	render() {

	    return (
			<div>
				<p>This is main root container</p>
				{ 
				/*	this.renderTables() */
				}
				{React.cloneElement({...this.props}.children, {...this.props})}
			</div>

	    )
	  }
}
export default Main;
