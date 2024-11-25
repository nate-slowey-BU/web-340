/**
 * Author: Nate Slowey
 * Date: 11/23
 * File Name: pie.js
 * Description:
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essentialIngredients = ["flour", "sugar", "butter"];

  for (let ingredient of essentialIngredients) {
    if (!ingredients.includes(ingredient)) {
      console.warn(`Warning: Missing essential ingredient - ${ingredient}`);
      process.exit(1);
    }
  }
  return `Successfully baked a ${pieType} pie with all essential ingredients`;
}

module.exports = { bakePie };
