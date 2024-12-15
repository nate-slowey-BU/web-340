const path = require("path");
const fs = require("fs/promises");
const { createCharacter, getCharacters } = require("../src/character-creation");

jest.mock("fs/promises");

const TEST_FILE_PATH = path.join(__dirname, "test-characters.json");

describe("Character Creation Module", () => {
  const testCharacter = { name: "Aria", class: "Rogue", gender: "Female" };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("createCharacter writes a new character to the file", async () => {
    fs.readFile.mockResolvedValue(JSON.stringify([])); // Start with an empty file
    fs.writeFile.mockResolvedValue();

    await createCharacter(testCharacter, TEST_FILE_PATH);

    expect(fs.readFile).toHaveBeenCalledWith(TEST_FILE_PATH, "utf-8");
    expect(fs.writeFile).toHaveBeenCalledWith(
      TEST_FILE_PATH,
      JSON.stringify([testCharacter], null, 2)
    );
  });

  test("getCharacters reads characters from the file", async () => {
    fs.readFile.mockResolvedValue(JSON.stringify([testCharacter]));

    const characters = await getCharacters(TEST_FILE_PATH);

    expect(fs.readFile).toHaveBeenCalledWith(TEST_FILE_PATH, "utf-8");
    expect(characters).toEqual([testCharacter]);
  });

  test("createCharacter handles errors when reading from the file", async () => {
    fs.readFile.mockRejectedValue(new Error("File read error"));

    await expect(
      createCharacter(testCharacter, TEST_FILE_PATH)
    ).rejects.toThrow("File read error");
  });
});
