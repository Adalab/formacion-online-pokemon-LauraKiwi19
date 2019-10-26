import React from "react";
import PokemonCard from "../components/PokemonCard"
import "../styles/_pokemon-list.scss"




const PokemonList = (props) => {
    console.log(props)
    if (props.inputValue.length > 1) {
        return (
            <ul className="pokemon__list-container">
                {props.pokemons
                    .filter(pokemon =>
                        (pokemon.name.includes(props.inputValue)))
                    .map((pokemon, index) => {
                        return (
                            <PokemonCard key={index} name={pokemon.name} id={pokemon.id} picture={pokemon.picture} type={pokemon.type} species={pokemon.species} />
                        )
                    })}
            </ul>
        )
    } else {
        return (
            <ul className="pokemon__list-container">
                {props.pokemons
                    .slice(0, 25)
                    .map((pokemon, index) => {
                        return (
                            <PokemonCard key={index} pokemons={props.pokemons} name={pokemon.name} id={pokemon.id} picture={pokemon.picture} type={pokemon.type} species={pokemon.species} />
                        )
                    })}
            </ul>
        )
    }
}


export default PokemonList;