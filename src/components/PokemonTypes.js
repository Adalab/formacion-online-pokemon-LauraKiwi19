import React from "react"



const PokemonTypes = (props) => {
    return (
        props.types.map((pokemonType, index) => {
            return (
                <li className={`pokemon__list-item pokemon__${pokemonType.type.name}`} key={index}>{pokemonType.type.name}</li>
            )
        })
    )
}

export default PokemonTypes;