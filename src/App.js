import React from 'react';
import './styles/_app.scss';
import PokemonList from "./components/PokemonList"
import GetDataFromServer from "./services/GetDataFromServer"
import Filter from "./components/Filter"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
      inputValue: ""
    }

    this.handleInputValue = this.handleInputValue.bind(this)
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

  handleInputValue(event) {
    const inputValueEvent = event.target.value;
    this.setState({
      inputValue: inputValueEvent
    })
    console.log(this.state.pokemons)
  }

  render() {
    return (
      <div className="pokemon__container" >
        <h1 className="pokemon__title">Pokédex</h1>
        <Filter handleInputValue={this.handleInputValue} />
        <PokemonList inputValue={this.state.inputValue} pokemons={this.state.pokemons} />
      </div>
    );
  };

};

export default App;
