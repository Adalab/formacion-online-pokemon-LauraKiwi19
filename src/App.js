import React from 'react';
import './styles/_app.scss';
import PokemonList from "./components/PokemonList"
import GetDataFromServer from "./services/GetDataFromServer"

console.log(GetDataFromServer())


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: []
    }
    this.GetPokemonDataFormatted = this.GetPokemonDataFormatted.bind(this)
  }

  componentDidMount() {
    GetDataFromServer()
      .then((promises) => Promise.all(promises))
      .then(data => {
        this.setState({
          pokemons: data
        });
      });
  }

  GetPokemonDataFormatted() {
    return (
      console.log(this.state.pokemons)
    )
  }


  render() {
    return (
      <div className="pokemon__container" >
        <PokemonList pokemons={this.state.pokemons} />
        <button onClick={this.GetPokemonDataFormatted}>Hola marica </button>
      </div>
    );
  };

};

export default App;
