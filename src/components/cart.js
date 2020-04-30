import React from 'react';
import {connect} from 'react-redux';


class cart extends React.Component{
        constructor(props){
            super(props);
            this.state={
              cart:[]

            }
        }

        remove(i){
              this.props.removeItem(i);
        }

 
        render(){
            return(
                <div className="container" style={{marginTop:"100px"}}>
                   <div className="display-4 text-center"> CART </div><br></br>
                   <div className="row flex-row flex-wrap">
               
                     
                  {
                     
                      this.props.mycarts.map((item,key)=>
                      <div className="card" style={{width:"15rem"}}>
                      <div className="card-footer"><b>S.no: </b> {key}</div>
                      <div className="card-body">
                      <div><strong>Itemname: </strong>{item.itemname}</div>
                      <div><strong>Quantity: </strong>{item.quantity}</div>
                      <div><strong>Amount: </strong>{item.amount}</div>
                      </div>
                      <div className="card-footer text-center">
                      <button className="btn btn-outline-danger right" align="right" onClick={()=>{this.remove(key)}}>Remove Item</button>
                  </div>
                     
                      </div>)
                  }
                  </div>
                </div>
            )

        }
    }
       
    

const mapStatetoprops=(state)=>{
    return{
        mycarts:state.cart
    }
}

const mapDispatchtoprops=(dispatch)=>{
    return{
        removeItem:(key)=>{dispatch({type:'SUB',payload:key})}
    }
}

export default connect(mapStatetoprops,mapDispatchtoprops)(cart);