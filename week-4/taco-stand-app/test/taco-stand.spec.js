/**
 * Author: Nate Slowey
 * Date: 11/16
 * File Name: taco-stand.spec.js
 * Description:
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");
const tacoStand = new TacoStandEmitter();

function testServeCustomer() {
  try {
    tacoStand.removeAllListeners("serve");

    const testCustomer = "John";

    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, testCustomer);
    });

    tacoStand.serveCustomer(testCustomer);

    console.log("testServeCustomer passed");
    return true;
  } catch (err) {
    console.error("testServeCustomer failed : ${err}");
    return false;
  }
}

function testPrepareTaco() {
  try {
    tacoStand.removeAllListeners("prepare");

    const testTaco = "beef";

    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, testTaco);
    });

    tacoStand.prepareTaco(testTaco);

    console.log("testPrepareTaco passed");
    return true;
  } catch (err) {
    console.error("testPrepareTaco failed: ${err}");
    return false;
  }
}

function testHandleRush() {
  try {
    tacoStand.removeAllListeners("rush");

    const testRush = "lunch";

    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, testRush);
    });

    tacoStand.handleRush(testRush);

    console.log("testHandleRush passed");
    return true;
  } catch (err) {
    console.error("testHandleRush failed: ${err}");
    return false;
  }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();

module.exports = TacoStandEmitter;
