import React from "react";
import {ADD_PRODUCT, CHANGE_ORDER} from "../redux/actions/shopListActions";
import {connect} from "react-redux";
import ShopListPresentional from "./presentional/ShopListPresentional";

function ShopList() {

    function mapStateToProps(state) {
        return {
            state : state
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            handleAddProduct: (e, id, value, quantity) => {
                e.preventDefault();
                dispatch({
                    type: ADD_PRODUCT,
                    payload: {
                        id: id,
                        name: value,
                        quantity: quantity
                    }
                })
            },

        }
    }

    const Container = connect(mapStateToProps, mapDispatchToProps)(ShopListPresentional);

    return <Container/>;
}

export default ShopList;