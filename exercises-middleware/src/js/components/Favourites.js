import React from "react";

const Favourites = ({favourites}) => {
    let counter = 0;
    return <ul>
        {favourites.map(quote => {
            const list = <li key={counter}>{quote.quote} / {quote.author}</li>
            counter++;
            return list;
            }
        )}
    </ul>
}
export default Favourites;
