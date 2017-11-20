import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Login from './components/login';
import UserDetails from './components/user_details';
import axios from 'axios';


class AppComp extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], url:  "https://jsonplaceholder.typicode.com/photos", status: ""};
    }

    fetchData(apiKey) {
        var request = new XMLHttpRequest();
        request.open('GET', this.state.url, true);
        self = this;
        axios.get( this.state.url, {"method": "GET", "headers" : {
            "authorization": apiKey,
            "Accept": "application/json, text/plain",
            "dataType": 'jsonp',
            "crossDomain": true,
            "content-type": "application/json"
        }}).then((response) => {
            console.log(response.status);
            self.setState({status: response.status});
            if (response.status >= 200 && response.status < 300) {
                self.setState({ data: response.data });
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        }).catch(function (err) {
            throw err;
        })
    }

    render() {
        if (!this.state.status){
            return (
                <div>
                    <Login onLonginFormSubmit={(apiKey) => this.fetchData(apiKey)} status={this.state.status}/>

                </div>
            );
        }else {
           return <UserDetails usercontent={this.state.data} />;
        }
    }
}



ReactDom.render(
    <div className="container">
        <AppComp/>
    </div>
    ,
    document.querySelector('.container')
)