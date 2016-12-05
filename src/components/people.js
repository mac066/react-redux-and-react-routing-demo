import React from 'react'
class People extends React.Component{
	actionHandle(event){
		// event.preventDefault()
		this.props.onClickList(this.props.id,event.target.checked)
	}
	render(){
		const {peoplelist, id} = this.props
		return(
			<tr>
	            <td>
	            	<form>
	                	<input type="checkbox" onChange={this.actionHandle.bind(this)} />
	                </form>
	            </td>
	            <td className="success" >{peoplelist.id}</td>
	            <td className="warning">{peoplelist.title}</td>
	            <td className="warning">{peoplelist.userId}</td>
							<td className="success" >{peoplelist.deviceType}</td>

	        </tr>
		)
	}
}

export default People
