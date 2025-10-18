import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";
import "../styles/Card.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/generation/1")
      .then((response) => response.json())
      .then(async (data) => {
        const speciesList = data.pokemon_species.slice(0, 10);

        const pokemonDataPromises = speciesList.map(async (species) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${species.name}`
          );
          const pokemonData = await res.json();

          return {
            name: species.name,
            sprite: pokemonData.sprites.front_default,
          };
        });

        const fullData = await Promise.all(pokemonDataPromises);

        setPokemonList(fullData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapper">
      <h1>Card Memory Game!</h1>
      <div className="game-score">
        <p>game score: {score}</p>
      </div>
      {pokemonList[pokemonList.length - 1] ? (
        <GameBoard
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
          guesses={guesses}
          setGuesses={setGuesses}
          score={score}
          setScore={setScore}
        />
      ) : (
        "loading"
      )}
    </div>
  );
}

export default App;
