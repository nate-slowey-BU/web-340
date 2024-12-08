const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const testData = "Warrior,Male,Loves extreme sports";

    // Capture the data event
    characterCreator.on("data", (data) => {
      expect(data.toString()).toBe(`Created character: "${testData}"`);
      done();
    });

    // Write data to the stream
    characterCreator.write(testData);
    characterCreator.end();
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // Listen for the error event
    characterCreator.on("error", (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Invalid data");
      done();
    });

    // Write an empty string
    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    const testData = "Mage,Female,Collects rare magical artifacts";

    characterCreator.on("data", (data) => {
      expect(data.toString()).toBe(`Created character: "${testData}"`);
      done();
    });

    characterCreator.write(testData);
    characterCreator.end();
  });
});
