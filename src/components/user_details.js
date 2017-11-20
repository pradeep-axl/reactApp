import React from 'react';

const UserDetails = (props) => {
    if(!props || !props.) {
        return '';
    }
   const content = props.userContent.map((content) => { return (
        <div>
        <div className="title">{content.name}</div>
        <div className="user-name">{content.username}</div>
        </div>
    )
    });

    return (
        <div className="col-md-8">
            {content}
        </div>
    );
}

export  default UserDetails;