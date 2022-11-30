import React, {useState} from "react";
import BrandOptionComponent from "./BrandOptionComponent";

function SelectOrTypeComponent(...items) {

    const [value, setValue] = useState('');
    const [brands, setBrands] = useState(items[0].items)
    const [other, setOther] = useState("");

    function handleButton(e) {
        e.preventDefault()
        setBrands(prev  => {
            const array = prev;
            array.pop();
            const shortArray = array;
            console.log(shortArray)
            shortArray.push(other);
            return shortArray;
        })
        setValue(other);
    }


    return (
        <>
            <form>
                <select value={value} onChange={e => setValue(e.target.value)}>
                    <BrandOptionComponent brands={brands}/>
                </select>
                {
                    (value === "Inna") && (
                        <>
                            <input type="text" value={other} onChange={e => setOther(e.target.value)}/>
                            <button onClick={event => handleButton(event)}>Dodaj</button>
                        </>
                    )
                }
            </form>
        </>
    )
}

export default SelectOrTypeComponent;