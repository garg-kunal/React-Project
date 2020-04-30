import React from 'react';
import {NavLink} from 'react-router-dom';
export default function Connections(){

    return (
        <div className="container  d-flex flex-row flex-wrap " style={{marginTop:"90px"}}>
         <div className="row container flex-row mx-auto d-inline-flex" id="selectionbar">
             <NavLink className="nav-item nav-link mx-auto " to="/web">Web Developers</NavLink>
             <NavLink className="nav-item nav-link mx-auto" to="/ml">Machine Learning</NavLink>
             <NavLink className="nav-item nav-link mx-auto" to="/android">Android Developers</NavLink>
             <NavLink className="nav-item nav-link mx-auto border" to="/connect">Connections</NavLink>
         </div>
            Connections Here Shown
        </div>
    )
}