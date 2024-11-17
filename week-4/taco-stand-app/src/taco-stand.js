/**
 * Author: Nate Slowey
 * Date: 11/16
 * File Name: taco-stand.js
 * Description:
 */
"use strict";

const EventEmitter = require("events");

class TacoStandEmitter extends EventEmitter {
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;
