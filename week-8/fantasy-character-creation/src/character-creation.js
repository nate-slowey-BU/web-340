"use strict";

const { readFile, writeFile } = require("fs/promises");
const path = require("path");

// Constants
const CHARACTERS_FILE = path.join(__dirname, "characters.json");
const VALID_CLASSES = ["Warrior", "Mage", "Rogue"];
const VALID_GENDERS = ["Male", "Female"];

async function createCharacter(character, filePath = CHARACTERS_FILE) {
  // Invalid class
  if (!VALID_CLASSES.includes(character.class)) {
    throw new Error(
      `Invalid class. Must be one of: ${VALID_CLASSES.join(", ")}`
    );
  }

  // Invalid gender
  if (!VALID_GENDERS.includes(character.gender)) {
    throw new Error(
      `Invalid gender. Must be one of: ${VALID_GENDERS.join(", ")}`
    );
  }

  let characters = [];

  try {
    const fileContents = await readFile(filePath, "utf-8");
    characters = JSON.parse(fileContents);
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }

  characters.push(character);

  await writeFile(filePath, JSON.stringify(characters, null, 2));
}

async function getCharacters(filePath = CHARACTERS_FILE) {
  try {
    const fileContents = await readFile(filePath, "utf-8");
    return JSON.parse(fileContents);
  } catch (err) {
    if (err.code === "ENOENT") {
      return [];
    }
    throw err;
  }
}

module.exports = { createCharacter, getCharacters }; // For promises
