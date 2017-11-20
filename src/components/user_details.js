import React, {Component} from 'react';

const UserDetails = ({usercontent}) => {
    if(!usercontent) {
        return <div>Login to Access data</div>;
    }
   const content = usercontent.slice(0,5).map((content) => { return (
        <div key={content.id}>
        <div className="title">{content.title}</div>
        <img src={content.thumbnailUrl} alt={content.title} />
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