import React from "react";
import "../styles/_filter.scss"

const Filter = (props) => {
    return (
        <input className="pokemon__filter" type="text" placeholder="Search your Pokemon" onChange={props.handleInputValue} />
    )
}


export default Filter;