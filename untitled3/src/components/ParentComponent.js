import React from "react";
import ChildComponent from "./ChildComponent"

function ParentComponent({name}) {
    return (
        <div>
            Parent
                <ChildComponent name={name}/>
        </div>
    )
}

export default ParentComponent;