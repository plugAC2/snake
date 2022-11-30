import React, {useEffect, useState} from "react";

function Pokemon({objectUrl}) {

    const [pokemonDetails, setPokemonDetails] = useState(false);

    useEffect(() => {
        async function getPokemonDetails() {
            const response = await fetch(objectUrl);
            const responseJson = await response.json();
            console.log(responseJson)
            setPokemonDetails(responseJson)
        }

        getPokemonDetails();
    }, [])

    return (<>{pokemonDetails &&
        <div hidden={false}>
            <img src={pokemonDetails.sprites.front_default} alt="pokemon's front image"/>
            <img src={pokemonDetails.sprites.back_default} alt="pokemon's back image"/>
            <br/>
            Weight: {pokemonDetails.weight}
            {" "}
            Height: {pokemonDetails.height}
        </div>
    }</>)

}

export default Pokemon;