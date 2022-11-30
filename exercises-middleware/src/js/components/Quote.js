import React from "react";

const Quote = ({quote, loading, error, fetchQuote, addFav}) => (
  <div>
    <button disabled={loading} onClick={fetchQuote}>Pobierz cytat</button>
    {quote && <p>{quote.quote} / {quote.author}</p>}
    {loading && "Ładuję cytat..."}
    {error && error}
    <button hidden={!quote.quote} onClick={event => {
        event.preventDefault();
        addFav(quote);
    }}>Dodaj do ulubionych</button>
  </div>
);

export default Quote;
