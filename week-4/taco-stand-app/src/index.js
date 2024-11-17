/**
 * Author: Nate Slowey
 * Date: 11/16
 * File Name: index.js
 * Description:
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

tacoStand.on("serve", (customer) => {
  console.log(`TacoStand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`TacoStand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`TacoStand handles rush: ${rush}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const argument = args.join(" ");

  switch (command) {
    case "serve":
      if (argument) {
        tacoStand.serveCustomer(argument);
      } else {
        console.log('Please provide a customer name after "serve".');
      }
      break;

    case "prepare":
      if (argument) {
        tacoStand.prepareTaco(argument);
      } else {
        console.log('Please provide a taco type after "prepare".');
      }
      break;

    case "rush":
      if (argument) {
        tacoStand.handleRush(argument);
      } else {
        console.log('Please provide a rush description after "rush".');
      }
      break;

    default:
      console.log('Unknown command. Use "serve", "prepare", or "rush".');
  }
});

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
