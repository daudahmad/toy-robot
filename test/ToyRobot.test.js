const ToyRobot = require("../src/ToyRobot");

let toyRobot;

describe("ToyRobot unit tests", () => {
  beforeAll(() => {
    toyRobot = new ToyRobot();
  });

  test("should construct new object successfully", () => {
    expect(toyRobot).toBeDefined();
    expect(toyRobot).toEqual({
      currentDirection: null,
      isPlaced: false,
      tableDimensions: 5,
      xPos: null,
      yPos: null,
    });
  });

  test("should ignore command if PLACE is not issued yet", () => {
    toyRobot.processCommand({ commandType: "MOVE" });
    toyRobot.processCommand({ commandType: "LEFT" });
    toyRobot.processCommand({ commandType: "RIGHT" });
    toyRobot.processCommand({ commandType: "REPORT" });

    expect(toyRobot).toEqual({
      currentDirection: null,
      isPlaced: false,
      tableDimensions: 5,
      xPos: null,
      yPos: null,
    });
  });

  test("should ignore invalid PLACE command", () => {
    toyRobot.processCommand({
      commandType: "PLACE",
      xPos: 1,
      yPos: 6,
      direction: "SOUTH",
    });

    expect(toyRobot).toEqual({
      currentDirection: null,
      isPlaced: false,
      tableDimensions: 5,
      xPos: null,
      yPos: null,
    });
  });

  test("should process valid PLACE command", () => {
    toyRobot.processCommand({
      commandType: "PLACE",
      xPos: 1,
      yPos: 4,
      direction: "SOUTH",
    });

    expect(toyRobot).toEqual({
      currentDirection: "SOUTH",
      isPlaced: true,
      tableDimensions: 5,
      xPos: 1,
      yPos: 4,
    });
  });

  test("should process valid MOVE commands", () => {
    toyRobot.processCommand({
      commandType: "MOVE",
    });
    toyRobot.processCommand({
      commandType: "MOVE",
    });

    expect(toyRobot).toEqual({
      currentDirection: "SOUTH",
      isPlaced: true,
      tableDimensions: 5,
      xPos: 1,
      yPos: 2,
    });
  });

  test("should come to same direction if 4 LEFT commands are issued", () => {
    toyRobot.processCommand({
      commandType: "LEFT",
    });
    toyRobot.processCommand({
      commandType: "LEFT",
    });
    toyRobot.processCommand({
      commandType: "LEFT",
    });
    toyRobot.processCommand({
      commandType: "LEFT",
    });

    expect(toyRobot).toEqual({
      currentDirection: "SOUTH",
      isPlaced: true,
      tableDimensions: 5,
      xPos: 1,
      yPos: 2,
    });
  });

  test("should come to same direction if 4 RIGHT commands are issued", () => {
    toyRobot.processCommand({
      commandType: "RIGHT",
    });
    toyRobot.processCommand({
      commandType: "RIGHT",
    });
    toyRobot.processCommand({
      commandType: "RIGHT",
    });
    toyRobot.processCommand({
      commandType: "RIGHT",
    });

    expect(toyRobot).toEqual({
      currentDirection: "SOUTH",
      isPlaced: true,
      tableDimensions: 5,
      xPos: 1,
      yPos: 2,
    });
  });
});
