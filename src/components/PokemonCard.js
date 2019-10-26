import React from "react"
import { Link } from "react-router-dom"
import "../styles/_pokemon-card.scss"
import PokemonTypes from "./PokemonTypes"

function EvolutionFrom(evolves_from) {
    if (evolves_from === null) {
        return (
            <p></p>
        )
    } else {
        return (
            <p>Evolves from {evolves_from.name.charAt(0).toUpperCase() + evolves_from.name.slice(1)}</p>
        )
    }
};

const PokemonCard = (props) => {

    return (
        <div className="pokemon__card">
            <Link className="pokemon__link" to={`/pokemon/${props.id}`}>
                <div className="pokemon__preview">
                    <img className="pokemon__picture" src={props.picture} alt={props.name} />
                    <h5 className="pokemon__id">ID/{props.id}</h5>
                </div>
                <div className="pokemon__name-container">
                    <h2 className="pokemon__name">{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h2>
                    <ul className="pokemon__types-list"><PokemonTypes types={props.type} /></ul>
                    <p>{EvolutionFrom(props.species.evolves_from)}</p>
                </div>
            </Link>
        </div>
    )

};

export default PokemonCard;