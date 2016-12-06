import React from 'react'
import { browserHistory} from 'react-router'
import People from './people'

export default class Home extends React.Component{

  evaluateList(){
    let group,UnGroup
    if(!this.props.people.length) return true
    let selected = this.props.people.filter((item)=>{
      return item.checked === true
    })
    selected.forEach((item)=>{
      if(item.deviceType === "Group"){
        group = 1
      }
      if(item.deviceType === "UnGroup"){
        UnGroup = 1
      }
    })
    if(group && UnGroup){
      alert("You can\'n select Group and UnGroup at same time")
      return false
    }
    if(group ||  UnGroup){
      browserHistory.push('/about')
    }else{
      alert("Plz choose one of the list")
    }
  }
  render(){
    return(
      <div>
        <table className="table">
        <tbody>
        <tr>
        <th>SN</th>
        <th>ID</th>
        <th>Title</th>
        <th>body</th>

        <th>Userid</th>
        <th>Device Type</th>

        </tr>
        {
          this.props.people.map((item, i) => <People peoplelist={item} onClickList={this.props.onCheckBoxClick.bind(this)} key={i} id={i}/>)
        }

        </tbody>
        </table>
        <button onClick={this.evaluateList.bind(this)}> About </button>
      </div>
    )
  }
}
