import React from "react";
import PokemonCard from "../components/PokemonCard"


const PokemonList = (props) => {
    return (
        <ul>
            {props.pokemons.filter(pokemon => pokemon.name.includes(props.inputValue))
                .map((pokemon, index) => {
                    return (
                        <PokemonCard key={index} name={pokemon.name} id={pokemon.id} picture={pokemon.picture} type={pokemon.type} />
                    )
                })}
        </ul>
    )
}


export default PokemonList;