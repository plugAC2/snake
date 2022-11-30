import React, {useState, useEffect} from "react";

function CustomTile() {
    const [counter, setCounter] = useState(1);
    const [fontSize, setFontSize] = useState("1.2rem");

    function handleClick() {
        if (counter < 10) {
        setCounter(prevState => prevState + 1)
        } else {
            setCounter(1)
        }
    }

    function handleSizeIncrease() {
        let size = counter * 1.2;
        return size;
    }

    useEffect(() => {
        setFontSize(handleSizeIncrease() + "rem");
        document.title = counter.toString();
    }, [counter])

    return(
        <>
            <p onClick={handleClick} style={{fontSize:fontSize}}>Kliknięto mnie już {counter} razy</p>
        </>
    )
}

export default CustomTile;