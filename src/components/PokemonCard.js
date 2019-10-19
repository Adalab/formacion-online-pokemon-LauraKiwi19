import React from "react"


const PokemonCard = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                <img src={props.picture} alt={props.name} />
                <h5>{props.id}</h5>
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>Hola</p>
            </div>
        </div>
    )
};

export default PokemonCard;