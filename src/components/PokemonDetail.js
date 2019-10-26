import React from "react";
import { Link } from "react-router-dom"
import PokemonTypes from "./PokemonTypes"
import "../styles/_pokemon-detail.scss"

function EvolvesFrom(evolves_from) {
    if (evolves_from === null) {
        return (
            <li className="detail__list-item"></li>
        )
    } else {
        return (
            <li className="detail__list-item"> <strong>Evolves from: </strong>{evolves_from.name.charAt(0).toUpperCase() + evolves_from.name.slice(1)}</li>
        )
    }
};

/* function EvolvesTo(url) {
    return (
        fetch(url)
            .then(response => response.json())
            .then(data => {
                return (
                    <li>{data.id}</li>
                )
            })
    )
} */

const PokemonDetail = props => {
    console.log(props)
    if (props.pokemon === undefined) {
        return (
            <h1>Cargando...</h1>
        )
    } else {
        return (
            <div className="detail__container">
                <h2 className="detail__name">{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</h2>
                <img className="detail__picture" src={props.pokemon.picture} alt={props.pokemon.name} />
                <p className="detail__id">ID: {props.pokemon.id}</p>
                <PokemonTypes types={props.pokemon.type} />
                <ul className="detail__list">
                    <li className="detail__list-item"><strong>Habitat:</strong> {props.pokemon.species.habitat.charAt(0).toUpperCase() + props.pokemon.species.habitat.slice(1)}</li>
                    <li className="detail__list-item"><strong>Heigth:</strong> {props.pokemon.heigth}'</li>
                    <li className="detail__list-item"><strong>Weight:</strong> {props.pokemon.weight} lbs</li>
                    {EvolvesFrom(props.pokemon.species.evolves_from)}
                </ul>
                <button className="detail__button">
                    <Link to="/" className="detail__link"><b className="detail__return">Return</b></Link>
                </button>

            </div>
        )
    }
}


export default PokemonDetail;