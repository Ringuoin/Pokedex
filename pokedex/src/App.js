import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonPick, setPokemonPick] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    type: "",
    hp: "",
    attack: "",
    defense: "",
    special_attack: "",
    special_defense: "",
    speed: "",
  });
  const recherchePokemon = ()=> {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        setPokemon({
          name: pokemonName,
          img: response.data.sprites.front_default,
          type: response.data.types[0].type.name,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          special_attack: response.data.stats[3].base_stat,
          special_defense: response.data.stats[4].base_stat,
          speed: response.data.stats[5].base_stat,
        });
        setPokemonPick(true);
      }
    );
  }


  return(
    <div className="App">
      <div className="Header">
        <h1> POKEDEX </h1>
        <input type="text" onChange={(event)=> {setPokemonName(event.target.value);
        }} />

        <button onClick={recherchePokemon}>Chercher Pokemon</button>
      </div>
      <div className = "Display">
        {!pokemonPick ? (
        <h1>Pas de recherche</h1>
        ) : (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.img}/>
          <h3>Type : {pokemon.type}</h3>
          <h3>PV : {pokemon.hp}</h3>
          <h3>Attaque : {pokemon.attack}</h3>
          <h3>Defense : {pokemon.defense}</h3>
          <h3>Attaque Speciale : {pokemon.special_attack}</h3>
          <h3>Defense Speciale : {pokemon.special_defense}</h3>
          <h3>Vitesse : {pokemon.speed}</h3>
        </>
        )}
      </div>
    </div>
  )
      }



export default App;
