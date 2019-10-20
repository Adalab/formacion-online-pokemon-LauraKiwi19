

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
                                return {
                                    name: data.name,
                                    id: data.id,
                                    picture: data.sprites.front_default,
                                    type: data.types
                                }
                            }))
                })
            })
    )

};



export default GetDataFromServer;