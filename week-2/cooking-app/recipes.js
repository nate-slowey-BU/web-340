/**
 * Author: Nate Slowey
 * Date: 10/29
 * File Name: recipes.js
 * Description:
 */

// Define the createRecipe function
function createRecipe(ingredients) {
  let list = "";
  for (let i = 0; i < ingredients.length; i++) {
    list += ingredients[i];

    if (i < ingredients.length - 1) {
      list += ", ";
    }
  }

  return "Recipe created with ingredients: " + list;
}

// Define the setTimer function
function setTimer(minutes) {
  return "Timer set for " + minutes + " minutes";
}

// Define the quit function
function quit() {
  return "Program exited";
}

module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit,
};
