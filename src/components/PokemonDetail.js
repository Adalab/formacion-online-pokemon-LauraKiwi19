import React from "react";
import PokemonTypes from "./PokemonTypes"

const PokemonDetail = props => {
    console.log(props)
    if (props.pokemon === undefined) {
        return (
            <h1>Cargando...</h1>
        )
    } else {
        return (
            <div className="detail__container">
                <h2>{props.pokemon.name}</h2>
                <p>ID: {props.pokemon.id}</p>
                <PokemonTypes types={props.pokemon.type} />
                <ul>
                    <li><strong>Habitat:</strong> {props.pokemon.species.habitat}</li>
                    <li><strong>Heigth:</strong> {props.pokemon.heigth}</li>
                    <li><strong>Weight:</strong> {props.pokemon.weight}</li>
                    <li><strong>Evolves from:</strong> {props.pokemon.species.evolves_from.name}</li>
                </ul>
            </div>
        )
    }
}


export default PokemonDetail;