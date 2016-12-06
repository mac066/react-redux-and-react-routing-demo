import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../action';
import data from '../data'
class FormForSelectedDevice extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    e.preventDefault()
    console.log(e.target.value)
  }
  render(){
    return(
      <div>
        <form>
          <label>Title :</label>
          <input  name="title" value={this.props.selected.title} onChange={this.handleChange}/>
          <br />
          <label> Body : </label>

        </form>
        <hr />
      </div>
    )
  }
}

 class SelectedDevice extends React.Component{
  render(){
    console.log(this.props.selectedDevice)
    return (
      <div>
        <h1> These are the selected Device </h1>
          {
            this.props.selectedDevice.map((item,i) => <FormForSelectedDevice selected={item} key={i} /> )
          }

      </div>
    )
  }
}
function mapStateToProps(state,ownProps) {
  return {
  	selectedDevice : state.people.people ? state.people.people.filter((item)=>{  return item.checked === true}) : data
  }
}
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const SelectedDeviceApp = connect(mapStateToProps, mapDispachToProps)(SelectedDevice);
export default SelectedDeviceApp
