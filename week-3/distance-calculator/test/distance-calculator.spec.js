"use strict";
const assert = require("assert");
const { calculateDistance } = require('../src/distance-calculator');

function testJupiterToSaturn() {
  try {
    const result = calculateDistance(5.2, 9.58); // Jupiter to Saturn in AU
    assert.strictEqual(result, 4.38);
    console.log("testJupiterToSaturn passed");
    return true;
  } catch (error) {
    console.error("testJupiterToSaturn failed:", error.message);
    return false;
  }
}

function testMarsToVenus() {
  try {
    const result = calculateDistance(1.52, 0.72); // Mars to Venus in AU
    assert.strictEqual(result, 0.8);
    console.log("testMarsToVenus passed");
    return true;
  } catch (error) {
    console.error("testMarsToVenus failed:", error.message);
    return false;
  }
}

function testSaturnToNeptune() {
  try {
    const result = Number(calculateDistance(9.58, 30.07).toFixed(2)); // Saturn to Neptune in AU
    assert.strictEqual(result, 20.49);
    console.log("testSaturnToNeptune passed");
    return true;
  } catch (error) {
    console.error("testSaturnToNeptune failed:", error.message);
    return false;
  }
}

// Call your test functions here
testJupiterToSaturn();
testMarsToVenus();
testSaturnToNeptune();
