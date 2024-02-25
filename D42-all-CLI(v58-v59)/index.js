#!/usr/bin/env node

// NOTE:
// "/usr/local/bin/node" - zero index path to the interpreter
// "/usr/local/bin/sashi-clipokedox" - first index path to the CLI
// "--pokemon=charmander" - second index passed in option

const yargs = require("yargs");
const { argv } = yargs(process.argv);

const printFiveNames = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const value = await response.json();
  //   console.log(value.moves);
  const fiveMove = value.moves.map(({ move }) => {
    // console.log(names.move.name);
    return move.name;
  });
  console.log(fiveMove.slice(0, 5));
};
printFiveNames(argv.pokemon);
