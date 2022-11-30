import React from "react";
import {connect} from "react-redux";

function Counter() {

    const Component = ({count, handleIncrement, handleDecrement}) => (<div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
    </div>);

    const mapStateToProps = state => {
        return {
            count : state
        };
    };


    const mapDispatchToProps = dispatch => {
        return {
            handleIncrement: () => dispatch({type: 'INCREMENT', payload : 1}),
            handleDecrement: () => dispatch({type: 'DECREMENT', payload: 1})
        }
    };

    const Container = connect(mapStateToProps, mapDispatchToProps)(Component)
    return <Container/>
}

export default Counter;