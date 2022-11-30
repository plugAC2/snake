import React from "react";
import GrandchildComponent from "./GrandchildComponent";

function ChildComponent({name}) {
    return (
        <div>
            Childcomponent
            <GrandchildComponent name={name}/>
        </div>
    )
}

export default ChildComponent;