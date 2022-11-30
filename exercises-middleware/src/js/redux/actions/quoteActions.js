import api from "../../api";

const QUOTE_FETCHING = "QUOTE_FETCHING";
const QUOTE_FETCHED = "QUOTE_FETCHED";
const QUOTE_ERROR = "QUOTE_ERROR";

const ADD_FAV = "ADD_FAV";


function startFetching() {
    return {
        type: QUOTE_FETCHING
    }
}

function quoteFetched(quote) {
    return {
        type: QUOTE_FETCHED,
        payload: quote
    }
}

function quoteError(error) {
    return {
        type: QUOTE_ERROR,
        payload: error
    }
}

function addFavourite(quote) {
    return {
        type: ADD_FAV,
        payload: quote
    }
}

function fetchQuote() {
    return (dispatch) => {
        dispatch(startFetching());
        api
            .fetchQuote()
            .then(data => {
                console.log(data);
                dispatch(quoteFetched(data));
            })
            .catch(error => {
                dispatch(quoteError(error));
            });
    };
}

export {fetchQuote, QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, ADD_FAV};