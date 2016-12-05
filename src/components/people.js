import React from 'react'
class People extends React.Component{
	actionHandle(event){
		// event.preventDefault()
		if(this.props.id > -1){
			this.props.onClickList(this.props.id,event.target.checked)
		}else{
			alert("System wrong")
		}
	}
	render(){
		const {peoplelist} = this.props
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
