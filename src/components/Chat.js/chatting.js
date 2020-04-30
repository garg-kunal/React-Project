import React from 'react';
import Test from '../images/test.jpg';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import "../css/chat.css";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';



const classes = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));




class Chatting extends React.Component {

    constructor() {
        super();
        this.state = {

            isToggleOn: false,
            isfab: true,
            form: ""
        }

    }


    popup() {

        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            isfab: !state.isfab
        }));


    }
    value(e) {

        this.setState({
            form: e.target.value
        });


    }

    submit() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            isfab: !state.isfab
        }));
        const all = {
            name: "Test",
            message: this.state.form
        }
        this.setState({
            form: ""
        })
        if (!this.state.form) {
            alert("Please Add Some msg...")
        }
        else {
            this.props.chat(all);
        }

    }


    render() {
        return (
            <div className="container " style={{ marginTop: "100px" }}>

                {this.props.mychat.map((item) =>
                    <div className="card" id="chat-card" >
                        <div className="card-body">
                            <div className="row no-gutters">
                                <div class="col-md-3 col-sm-4">
                                    <img src={Test} className="rounded-circle" alt="Sender pic" style={{ height: "60px" }} />
                                </div>
                                <div className="col-md-9 col-sm-8">
                                    <div className="card-title">
                                        <strong>From: </strong> {item.name}
                                    </div>
                                    <div className="card-content">
                                        {item.message}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <IconButton aria-label="delete"
                                color="primary"
                                align="right"
                                className={classes.margin}>
                                <DeleteIcon fontSize="large" />
                            </IconButton>

                        </div>
                    </div>
                )}

                <div className="fixed-bottom" align="right" style={{ marginTop: "20px", }}>
                    {this.state.isfab ? <Fab color="primary" aria-label="add">
                        <AddIcon onClick={() => { this.popup() }} />
                    </Fab> : " "}


                    {this.state.isToggleOn ? <div className="offset-md-9 col-md-3 border" style={{ backgroundColor: "whitesmoke", borderRadius: "25px" }}>

                        <div className="form-group" id="msg">
                            <input type="text" value={this.state.form} required placeholder="Enter the Message " className="form-control" onChange={(e => { this.value(e) })} /><br></br>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<Icon>send</Icon>}
                                onClick={() => { this.submit() }}
                            >Send
                        </Button>
                        </div>
                    </div>
                        : " "}
                </div>


            </div>
        )
    }
}
const mapStatetoprops = (state) => {
    return {
        mychat: state.chat
    }
}

const mapDispatchtoprops = (dispatch) => {
    return {
        chat: (all) => { dispatch({ type: 'CHAT', payload: all }) }
    }
}


export default connect(mapStatetoprops, mapDispatchtoprops)(Chatting);