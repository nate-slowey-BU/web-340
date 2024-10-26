/**
 * Author: Nate Slowey
 * Date: 10/26/24
 * File Name: weight-converter.js
 * Description: Converts weight in pounds to kilograms
 */

"use strict";

function main() {
  if (process.argv.length != 3) {
    console.error("stderr: Usage: node weight-converter.js <pounds>");
    process.exit(1);
  }
  const pounds = process.argv[2];
  if (isNaN(pounds)) {
    console.error("stderr: input must be a number");
    process.exit(1);
  }

  const kilograms = pounds * 0.453592;
  console.log(`${kilograms.toFixed(2)}`);
}

main();
