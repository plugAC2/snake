import React, {useEffect, useState} from "react";
import Pokemon from "./Pokemon";
import {Button} from "react-bootstrap";

function Pokemons() {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemons, setPokemons] = useState(false);

    function handleDetails(e) {
        e.preventDefault();
        e.target.nextSibling.toggleAttribute("hidden")
    }

    useEffect(() => {
        async function getPokemons() {
            const response = await fetch(url);
            const responseJson = await response.json();
            setPokemons(responseJson);
        }

        getPokemons();
    }, [url])

    return (
        <>
            Pokemons:
            {
                pokemons.previous !== null && <Button variant="primary" onClick={() => setUrl(pokemons.previous)}>Previous</Button>
            }
            {
                pokemons.next !== null && <Button onClick={() => setUrl(pokemons.next)}>Next</Button>
            }
            <ul>
                {pokemons && (
                    <div>
                        {pokemons.results.map(x => {
                                return (
                                    <>
                                        <li key={x.url}>{x.name.toUpperCase()}
                                            <br/>
                                            <Button onClick={event => handleDetails(event)}>Show details</Button>
                                            <div hidden={true}>
                                                <Pokemon objectUrl={x.url}/>
                                            </div>
                                        </li>
                                    </>
                                )
                            }
                        )}
                    </div>
                )}

            </ul>
        </>
    )
}

export default Pokemons;