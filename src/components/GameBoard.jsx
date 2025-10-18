import Card from "./Card";

export default function GameBoard({
  pokemonList,
  setPokemonList,
  guesses,
  setGuesses,
  score,
  setScore,
}) {
  return (
    <ul className="game-board">
      {pokemonList.map((pokemon, index) => (
        <Card
          key={`pokemonName${index}`}
          pokemon={pokemon}
          index={index}
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
          guesses={guesses}
          setGuesses={setGuesses}
          score={score}
          setScore={setScore}
        />
      ))}
    </ul>
  );
}
