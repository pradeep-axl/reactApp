// Go get react and give me access to this file.
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Login from './components/login';
import UserDetails from './components/user_details';
import axios from 'axios';


class AppComp extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], url:  "http://local.rapalert.com/admin/content.json"};
    }

    fetchData(apiKey) {
        axios.get(this.state.url, {"method": "GET", "headers" : {
            "authorization": apiKey,
            "Accept": "application/json, text/plain",
            "dataType": 'jsonp',
            "crossDomain": true,
            "content-type": "application/json"
        }}).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return this.state.setState({ data: response });

            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        }).catch(function (err) {

        });
    }

    render() {
        return (
            <div>
                <Login onLonginFormSubmit={(apiKey) => this.fetchData(apiKey)}/>
            </div>
        );
    }
}



ReactDom.render(
    <div className="container">
        <AppComp/>
        <UserDetails/>
    </div>
    ,
    document.querySelector('.container')
)