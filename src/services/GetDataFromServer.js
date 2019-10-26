function getEvolution(name) {
    return (
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            .then(response => response.json())
            .then(data => {
                return ({
                    evolves_from: data.evolves_from_species,
                    habitat: data.habitat.name,
                    shape: data.shape,
                    evolution_chain: data.evolution_chain.url
                }

                )
            }
            )
    )
}

const GetDataFromServer = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=150"
    return (
        fetch(url)
            .then(response => response.json())
            .then(data => {
                return data.results.map(pokemonUnformatted => {
                    return (
                        fetch(pokemonUnformatted.url)
                            .then(response => response.json())
                            .then(data => {
                                return (
                                    getEvolution(data.name).then(species => {
                                        return ({
                                            name: data.name,
                                            id: data.id,
                                            picture: data.sprites.front_default,
                                            type: data.types,
                                            heigth: data.height,
                                            weight: data.weight,
                                            species: species
                                        })
                                    })
                                )
                            }))
                })
            })
    )

};



export default GetDataFromServer;