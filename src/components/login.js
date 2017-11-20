import React, {Component} from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username: '', pass: '', apiKey: ''};
    }

    render() {
        // manipulate state by calling setState.
        return (
            <div className="form">
                <label>User Name:</label>
                <input value={this.state.username} onChange={event => this.setState({ username: event.target.value })}/>
                <label>Pass:</label>
                <input type="password" value={this.state.pass} onChange={event => this.setState({pass: event.target.value})}/>
                <button className="btn btn-primary" onClick={event => this.onButtonClick(event)}>Login</button>
            </div>
        );
    }

    onButtonClick(event) {
        let apiKey = "authorization: basic " + new Buffer(this.state.username + ":"+ this.state.pass).toString('base64');
       // console.log(apiKey);
        this.props.onLonginFormSubmit(apiKey);
    }
}

export  default Login;