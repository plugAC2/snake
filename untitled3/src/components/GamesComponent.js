import React, {useState, useEffect} from "react";

function GamesComponent() {
    const [boardgames, setBoardgames] = useState([]);
    const clientId = '2PzN0x3wwn';


    async function getGames(id) {
        try {
            const response = await fetch("https://api.boardgameatlas.com/api/search?name=Troyes&client_id=" + clientId);
            const boardgames = await response.json();
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        console.log(getGames(clientId));


    })

    return (
        <div>
            Fajno
        </div>
    )
}

export default GamesComponent;