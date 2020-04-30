import React from 'react';
import test from '../images/test.jpg';
import {NavLink} from 'react-router-dom'
import '../css/card.css';
class  Android extends React.Component{
  constructor(){
    super();
    this.state={
      names:['Ab','John','Cat','Dog','Eleophnat','Fish','Goat','Hat','Icecream']
    }
  
  }


render(){
    return(
      
        <div className="container  d-flex flex-row flex-wrap " style={{marginTop:"90px"}}>
        <div className="row container flex-row mx-auto d-inline-flex" id="selectionbar">
             <NavLink className="nav-item nav-link mx-auto" to="/web">Web Developers</NavLink>
             <NavLink className="nav-item nav-link mx-auto" to="/ml">Machine Learning</NavLink>
             <NavLink className="nav-item nav-link mx-auto border" to="/android">Android Developers</NavLink>
             <NavLink className="nav-item nav-link mx-auto" to="/connect">Connections</NavLink>
         </div>
           {this.state.names.map((name,key)=>
            <div className="card" style={{minWidth: "18rem",marginTop:"50px"}}>
          <img id="pic" className="card-img-top img-fluid" src={test} alt="Card  cap"/>
          <div className="card-body text-center">
            <h5 className="card-title" key={key}>{name}</h5>
            <ul className="list-group list-group-flush text-center">
    <li className="list-group-item">Android Developers Develper</li>
    <li className="list-group-item">Branch and Year</li>
  </ul>
  </div>
  <div className="card-footer mx-auto">
    <button className="btn btn-primary">Connect</button>
  </div>
</div>
           )}
           
   
</div>

    )
           }
}
export default Android;