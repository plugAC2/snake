import React from "react";
import ParentComponent from "./ParentComponent";

function User({user}) {
    return (
        <div>
            <h1>Hello {user.name}</h1>
            Your age {user.age}
            <br/>
            You are {user.gender}
            <ParentComponent name={user.name}/>
        </div>
    );
}

export default User;