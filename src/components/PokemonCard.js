import React from "react"



const PrintTypes = (props) => {
    return props.type.map((pokemonType, index) => {
        return (
            <li key={index}>{pokemonType.type.name}</li>
        )
    })
}


const PokemonCard = (props) => {
    return (
        <div>
            <div>
                <img src={props.picture} alt={props.name} />
                <h5>ID / {props.id}</h5>
            </div>
            <div>
                <h2>{props.name}</h2>
                <ul>{PrintTypes(props)}</ul>
            </div>
        </div>
    )

};

export default PokemonCard;