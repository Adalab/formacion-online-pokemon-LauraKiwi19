import React from "react";
import PokemonCard from "../components/PokemonCard"


const PokemonList = (props) => {
    return (
        <ul>
            {props.pokemons.map(pokemon => {
                return (
                    <PokemonCard name={pokemon.name} id={pokemon.id} picture={pokemon.picture} type={pokemon.type} />
                )
            })}
        </ul>
    )
}


export default PokemonList;