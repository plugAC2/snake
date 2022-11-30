import Favourites from "../components/Favourites";
import {connect} from "react-redux";

function FavouritesContainer() {
    const mapStateToProps = state => {
        return {
            favourites : state.favourites,
        }
    }

    const Container = connect(mapStateToProps)(Favourites);
    return <Container/>
}

export default FavouritesContainer;