export default function Card({
  pokemon,
  index,
  pokemonList,
  setPokemonList,
  score,
  setScore,
  guesses,
  setGuesses,
}) {
  
  function completed() {
    if (score == pokemonList.length) {
      setTimeout(() => {
        setScore(0);
      }, 2000);
      setScore("You Won!");
      setGuesses([]);
    }
  }

  function randomiseList() {
    let randList = [];
    for (let i = 0; i <= pokemonList.length - 1; i++) {
      let r = Math.floor(Math.random() * pokemonList.length);
      randList.includes(pokemonList[r]) ? i-- : randList.push(pokemonList[r]);
    }
    setPokemonList([...randList]);
  }

  function checkGuess(newGuess) {
    if (!guesses.includes(newGuess)) {
      setScore(score + 1);
      setGuesses((prevArray) => [...prevArray, newGuess]);
    } else {
      setScore(0);
      setGuesses([]);
    }
  }

  function handleClick(e) {
    e.preventDefault();

    randomiseList();

    const newGuess = e.currentTarget.textContent;
    checkGuess(newGuess);
  }

  completed();

  return (
    <li name={pokemon.name} onClick={(e) => handleClick(e)} className="card">
      <p>{pokemon.name}</p>
      <img key={`pokemonURL${index}`} src={pokemon.sprite} alt="" />
    </li>
  );
}
