import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {

  const [Name, setName] = useState("");
  const [pokemon, setPokemon] = useState({})
  const search = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${Name}`).then(
      (response)=> {
        setPokemon({
          name: Name,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          type: response.data.type[0].base_stat,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,

        });
      }
    );

  };

  return (
    <div className="App">
      <div className="Title">
        <h1> POKEDEX </h1>
        <input type="text" onChange={(event)=> {setName(event.target.value);}}/>
        <button onClick={search}>Chercher un Pokemon</button>
      </div>
    </div>
  );
}

export default App;
