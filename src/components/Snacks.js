import React from 'react';
import pic from "../components/images/text.jpg"


import {connect} from 'react-redux';


class display1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            name:"Maggie ",
            price:60
        }
       

    }
    check() {
        if (this.state.counter > 0) {
            this.dec();
        }
    }
    dec() {
        this.setState({

            counter: this.state.counter - 1
           
        })
    }
    inc() {
        this.setState({
            counter: this.state.counter + 1
           
        })

    }
    totalprice() {
        var a = this.state.price;
        var b = this.state.counter
        return (a * b);
    }
    addcart(){
       const all={
           itemname:this.state.name,
           quantity:this.state.counter,
           amount:this.state.price* this.state.counter,  
       }
       this.props.addtocart(all);
      alert("Item Added");
    }
    
    
   
    render() {
        return (
            <div className="container">
                <div className=" row flex-wrap  flex-row" style={{marginTop:"100px"}}>

                    <div className="card col-md-12">
                        <div className="card-header">
                            <b>Item_Name:</b> {this.state.name} {this.a}
                        </div>
                        <div className="card-body">
                            <img id="pic" className="img-fluid rounded-circle"
                                src={pic}
                                alt="img-cap"
                                align="right"
                                />
                            <div className="body-content" align="left">
                                <b>Price:</b> Rs {this.state.price}<br></br><br></br>
                                <b>Quantity:</b> <button className="btn btn-primary" onClick={() => { this.check() }}>-</button>
                                &nbsp; <b>{this.state.counter}</b>&nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={() => { this.inc() }}>+</button><br></br><br></br>
                                <b>Total Price: </b>{this.totalprice()}<br></br><br></br>
                                <button className="btn btn-warning" align="right" onClick={()=>{this.addcart()}}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                       

                </div>

            </div>
        )
    }

}


const mapDispatchtoprops=(dispatch)=>{
    return{
        addtocart:(all)=>{dispatch({type:'ADD',payload:all})}
    }
}


export default connect(null,mapDispatchtoprops)(display1);