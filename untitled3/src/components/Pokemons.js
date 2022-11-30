import React, {useEffect, useState} from "react";

function Pokemons() {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemons, setPokemons] = useState(false);

    useEffect(() => {
        async function getPokemons() {
            const response = await fetch(url);
            const responseJson = await response.json();
            setPokemons(responseJson);
        }
        getPokemons();
    }, [url])

    return (
        <ul>
            {pokemons && (
                <div>
                {pokemons.results.map(x => <li key={x.name}>{x.name.toUpperCase()}</li>)}
                    {pokemons.previous !== null && (
                            <button onClick={() => setUrl(pokemons.previous)}>BACK</button>
                        )}
                    <button onClick={() => setUrl(pokemons.next)}>NEXT</button>
                </div>
            )}
        </ul>
    )

}

export default Pokemons;