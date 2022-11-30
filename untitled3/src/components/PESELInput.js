import React, {useState} from "react";

export default () => {
    const [pesel, setPesel] = useState("");
    const [peselPattern, setPeselPattern] = useState(true);

    function handleInput(e) {
        setPesel(e.target.value)
        setPeselPattern(e.target.validity.patternMismatch)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <form>
            Podaj swój nr PESEL:
            <input type="text" pattern="^\d{11}$" value={pesel} onChange={event => handleInput(event)}/>
            <div>
                {!peselPattern ? <input type="submit" value="Prześlij" onClick={event => handleSubmit(event)}/> : <p>Niepoprawny nr PESEL</p>}

            </div>
        </form>
    )
}