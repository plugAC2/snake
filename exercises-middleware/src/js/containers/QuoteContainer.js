import Quote from "../components/Quote";
import {connect} from "react-redux";
import {fetchQuote} from "../redux/actions/quoteActions";

function QuoteContainer() {
    const mapStateToProps = state => {
        return {
            quote : state.quote,
            loading : state.loading,
            error: state.error
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            fetchQuote : () => dispatch(fetchQuote()),
            addFav: (value) => {
                console.log(value);
                dispatch({type: "ADD_FAV", payload: value})
            }
        }
    }

    const Container = connect(mapStateToProps, mapDispatchToProps)(Quote);
    return <Container/>
}

export default QuoteContainer;