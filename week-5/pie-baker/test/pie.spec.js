/**
 * Author: Nate Slowey
 * Date: 11/23
 * File Name: pie.spec.js
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

describe("bakePie function", () => {
  let mockExit;
  let mockWarn;

  beforeEach(() => {
    mockWarn = jest.spyOn(console, "warn").mockImplementation(jest.fn());
    mockExit = jest.spyOn(process, "exit").mockImplementation(jest.fn());
  });

  afterEach(() => {
    mockWarn.mockRestore();
    mockExit.mockRestore();
  });

  // Test case 1 - Success case first (no process.exit)
  test("returns success message when all essential ingredients are present", () => {
    const typeOfPie = "apple";
    const ingredients = ["flour", "sugar", "butter", "apples"];
    const result = bakePie(typeOfPie, ingredients);
    expect(result).toBe(
      "Successfully baked a apple pie with all essential ingredients"
    );
    expect(mockExit).not.toHaveBeenCalled();
  });

  // Test case 2
  test("logs a warning and exits when sugar is missing", () => {
    const typeOfPie = "cherry";
    const ingredients = ["flour", "butter", "cherry"];

    bakePie(typeOfPie, ingredients);

    expect(mockWarn).toHaveBeenCalledWith(
      "Warning: Missing essential ingredient - sugar"
    );
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  // Test case 3
  test("logs a warning and exits when butter is missing", () => {
    const typeOfPie = "pumpkin";
    const ingredients = ["flour", "sugar", "pumpkin"];

    bakePie(typeOfPie, ingredients);

    expect(mockWarn).toHaveBeenCalledWith(
      "Warning: Missing essential ingredient - butter"
    );
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});
