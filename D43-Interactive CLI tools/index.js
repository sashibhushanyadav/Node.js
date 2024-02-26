#!/usr/bin/env node

const inquirer = require("inquirer");

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

const prompt = inquirer.createPromptModule();
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view its first 5 moves",
  },
]).then((answer) => {
  const pokemon = answer.pokemon;
  apiProduct(pokemon);
});
