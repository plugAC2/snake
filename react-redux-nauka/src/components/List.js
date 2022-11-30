import React, {useState} from "react";
import {connect} from "react-redux";
import {type} from "@testing-library/user-event/dist/type";


function List() {

    const mapStateToProps = state => {
        return {
            state : state
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            handleAddName: (e) => {
                e.preventDefault()
                dispatch({
                    type: "ADD_NAME",
                    payload: e.target.value})
            },
            handleCurrentName: name => {
                dispatch({
                    type: "CURRENT_NAME",
                    payload: name
                })
            }
        }
    }


    const Component = ({state, handleCurrentName, handleAddName}) => (
        <>
            {console.log(state.names)}
            <input type="text"  value={state.currentName} onChange={e => handleCurrentName(e.target.value)}/>
            <button value={state.currentName} onClick={e => handleAddName(e)}>Dodaj</button>
            <ul>
                {[...state.names].map((el) => {
                    return <li key={el}>{el}</li>
                })}
            </ul>
        </>
    )

    const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
    return <Container/>
}

export default List;