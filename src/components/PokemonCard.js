import React from "react"
import "../styles/_pokemon-card.scss"



const PrintTypes = (props) => {
    return props.type.map((pokemonType, index) => {
        if (pokemonType.type.name === "poison") {
            return (
                <li className="pokemon__list-item pokemon__poison" key={index}>{pokemonType.type.name}</li>
            )
        } else if (pokemonType.type.name === "grass") {
            return (
                <li className="pokemon__list-item pokemon__grass" key={index}>{pokemonType.type.name}</li>
            )
        } else if (pokemonType.type.name === "water") {
            return (
                <li className="pokemon__list-item pokemon__water" key={index}>{pokemonType.type.name}</li>
            )
        } else if (pokemonType.type.name === "bug") {
            return (
                <li className="pokemon__list-item pokemon__bug" key={index}>{pokemonType.type.name}</li>
            )
        } else if (pokemonType.type.name === "fire") {
            return (
                <li className="pokemon__list-item pokemon__fire" key={index}>{pokemonType.type.name}</li>
            )
        } else if (pokemonType.type.name === "flying") {
            return (
                <li className="pokemon__list-item pokemon__flying" key={index}>{pokemonType.type.name}</li>
            )
        } else if (pokemonType.type.name === "normal") {
            return (
                <li className="pokemon__list-item pokemon__normal" key={index}>{pokemonType.type.name}</li>
            )
        } else if (pokemonType.type.name === "electric") {
            return (
                <li className="pokemon__list-item pokemon__electric" key={index}>{pokemonType.type.name}</li>
            )
        }

    })
}


const PokemonCard = (props) => {
    return (
        <div className="pokemon__card">
            <div className="pokemon__preview">
                <img className="pokemon__picture" src={props.picture} alt={props.name} />
                <h5 className="pokemon__id">ID/{props.id}</h5>
            </div>
            <div className="pokemon__name-container">
                <h2 className="pokemon__name">{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h2>
                <ul className="pokemon__types-list">{PrintTypes(props)}</ul>
            </div>
        </div>
    )

};

export default PokemonCard;