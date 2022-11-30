import React from "react";
import main from "../Draw/main";

export default function Snake({snake, Canvas}) {

    console.log(snake)
    const canvas = document.getElementById("board");
    const boardContext = Canvas.getContext("2d");
    console.log(boardContext)
    main(boardContext,snake)
    return <div>Snake</div>
}