import React, {useState} from "react";

function SelectOrTypeConponent([...items]) {

    const [value, setValue] = useState('');

    function makeOptions(x) {
        x.map(item => {
            return (
                <option value={item}>{item}</option>
            )
        })
    }

    return(
        <>
            <form>
                <select value={value} onChange={e => setValue(e.target.value)}>
                    {() => makeOptions(items)}
                </select>
            </form>
        </>
    )
}

export default SelectOrTypeConponent;