import React, {useState} from "react";

function HelloComponent() {
    const [name, setName] = useState("Ty");
    return (
        <>
            <form>
                <h1>Hello, {name}</h1>
                <input type="text" onChange={event => setName(event.target.value)}/>
            </form>
        </>
    )
}

export default HelloComponent;