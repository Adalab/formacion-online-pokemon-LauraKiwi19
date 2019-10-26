import React from 'react';
import { Route, Switch, Link } from "react-router-dom"
import './styles/_app.scss';
import PokemonList from "./components/PokemonList"
import GetDataFromServer from "./services/GetDataFromServer"
import Filter from "./components/Filter"
import PokemonDetail from "./components/PokemonDetail"



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: [],
      inputValue: ""
    }

    this.handleInputValue = this.handleInputValue.bind(this)
    this.renderHomePage = this.renderHomePage.bind(this);
    this.renderDetail = this.renderDetail.bind(this);



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

  renderHomePage() {
    return (
      <React.Fragment>
        <Filter
          handleInputValue={this.handleInputValue} />
        <PokemonList
          inputValue={this.state.inputValue}
          pokemons={this.state.pokemons} />
      </React.Fragment>
    )
  }

  renderDetail(routerProps) {
    console.log(routerProps)
    const selectedPokemon = parseInt(routerProps.match.params.pokemonId)
    let chosenPokemon
    for (const pokemon of this.state.pokemons) {
      if (pokemon.id === selectedPokemon) {
        chosenPokemon = pokemon
      }
    }
    return (
      <PokemonDetail pokemon={chosenPokemon} />
    )
  };

  render() {
    return (
      <div className="pokemon__container" >
        <h1 className="pokemon__title">Pokédex</h1>
        <Switch>
          <Route exact path="/" render={this.renderHomePage} />
          <Route path="/pokemon/:pokemonId" render={this.renderDetail} />
        </Switch>
      </div>
    );
  };

};

export default App;
