import React from 'react';
import './Friend.css'
const Friend = (props) => {
    console.log(props);
    const handleAddFriend = props.handleAddFriend;

    return (
        <div className="friend">
             <button onClick={()=>handleAddFriend(props.friend)}>Add Me</button>
            <h5>Name: {props.friend.name.title} {props.friend.name.first}</h5>
            <h5>Salary:{props.friend.salary}</h5>
            <img src={props.friend.picture.large} alt=""/>  
        </div>
    );
};

export default Friend;