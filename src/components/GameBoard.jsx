import Card from "./Card";

export default function GameBoard(props) {
  const { pokemonList } = props;

  return (
    <ul className="game-board">
      {pokemonList.map((pokemon, index) => (
        <Card key={`pokemonName${index}`} pokemon={pokemon} states={props} />
      ))}
    </ul>
  );
}
