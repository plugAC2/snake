import React from "react";
import INCREASE from "../redux/actions/increase";
import DECREASE from "../redux/actions/decrease";
import {connect} from "react-redux";
import {PresentationalComponent} from "./presentional/SimpleCounterPresentional";

function SimpleCounter() {

    function mapStateToProps(state) {
        return {
            value: state
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            handleIncrease: (e) => {
                e.preventDefault();
                dispatch({
                    type:INCREASE,
                    payload:1
                })
            },
            handleDecrease: (e) => {
                e.preventDefault();
                dispatch({
                    type:DECREASE,
                    payload:-1
                })
            },
        }
    }


    const Container = connect(mapStateToProps,mapDispatchToProps)(PresentationalComponent);
    return <Container/>;
}

export default SimpleCounter;