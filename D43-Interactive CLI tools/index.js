#!/usr/bin/env node

const yargs = require("yargs");
const {argv} = yargs(process.argv);

const apiProduct = async (productName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${productName}`
  );
  const { moves } = await response.json();
  const data = moves.map(({ move }) => {
    return move.name;
  });
  console.log(data.slice(0, 5));
};
apiProduct(argv.pokemon);
