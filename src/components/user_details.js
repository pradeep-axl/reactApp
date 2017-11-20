import React, {Component} from 'react';

const UserDetails = ({usercontent}) => {
    if(!usercontent) {
        return <div>Login to Access data</div>;
    }
  /* const content = props.userContent.map((content) => { return (
        <div>
        <div className="title">{content.name}</div>
        <div className="user-name">{content.username}</div>
        </div>
    )
    });*/

    return (
        <div className="col-md-8">
        </div>
    );
}

export  default UserDetails;