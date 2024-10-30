/**
 * Author: Nate Slowey
 * Date: 10/29
 * File Name: index.js
 * Description:
*/

const { createRecipe, setTimer, quit } = require('./recipes');

console.log(createRecipe(['flour', 'sugar', 'eggs']));
console.log(setTimer(10));
console.log(quit());