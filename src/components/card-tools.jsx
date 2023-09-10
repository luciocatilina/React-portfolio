import React from "react";
import '../css/card-tools.css'

function Tool(props) {
    return(
        <div className="tool">
            {props.tool}
        </div>
    )
}

export default Tool;