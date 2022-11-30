import React, {useState} from "react";

function TextFieldComponent() {
    const [word, setWord] = useState("")

    function wordLength(word){
        return word.length;
    }

    return (
      <>
          <div>
              <p>

              </p>
              <select name="word" id="word" value={word} onChange={e => setWord(e.target.value)}>
                  <option value="Dupa">Dupa</option>
                  <option value="Twarz">Twarz</option>
                  <option value="Cycuszki">Cyce</option>
              </select>
              <span>
                  {wordLength(word)}
              </span>
          </div>
      </>
    );
}

export default TextFieldComponent;