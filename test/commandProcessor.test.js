const { processCommand } = require("../src/commandProcessor");
const ToyRobot = require("../src/ToyRobot");

let toyRobot;

describe("processCommand unit tests", () => {
  beforeAll(() => {
    toyRobot = new ToyRobot();
    console.log = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should print 0,1,WEST after processing commands", async () => {
    processCommand("PLACE 0,0,NORTH", toyRobot);
    processCommand("MOVE", toyRobot);
    processCommand("LEFT", toyRobot);
    processCommand("MOVE", toyRobot);
    processCommand("REPORT", toyRobot);

    expect(console.log.mock.calls[0][0]).toBe("0,1,WEST");
  });

  test("should print 4,2,EAST after processing commands", async () => {
    processCommand("PLACE 3,3,SOUTH", toyRobot);
    processCommand("MOVE", toyRobot);
    processCommand("LEFT", toyRobot);
    processCommand("MOVE", toyRobot);
    processCommand("MOVE", toyRobot);
    processCommand("REPORT", toyRobot);

    expect(console.log.mock.calls[0][0]).toBe("4,2,EAST");
  });

  test("should correctly process multiple PLACE commands", async () => {
    processCommand("MOVE", toyRobot);
    processCommand("LEFT", toyRobot);
    processCommand("RIGHT", toyRobot);
    processCommand("PLACE 3,3,SOUTH", toyRobot);
    processCommand("MOVE", toyRobot);
    processCommand("LEFT", toyRobot);
    processCommand("MOVE", toyRobot);
    processCommand("MOVE", toyRobot);
    processCommand("REPORT", toyRobot);
    processCommand("PLACE 4,4,WEST", toyRobot);
    processCommand("REPORT", toyRobot);

    expect(console.log.mock.calls[0][0]).toBe("4,2,EAST");
    expect(console.log.mock.calls[1][0]).toBe("4,4,WEST");
  });

  test("should ignore PLACE command with bad arguments", async () => {
    processCommand("MOVE", toyRobot);
    processCommand("LEFT", toyRobot);
    processCommand("RIGHT", toyRobot);
    processCommand("PLACE 10,-33,SOUTH", toyRobot);
    processCommand("MOVE", toyRobot);
    processCommand("LEFT", toyRobot);
    processCommand("MOVE", toyRobot);
    processCommand("MOVE", toyRobot);

    expect(console.log.mock.calls[0]).toBeUndefined();
  });
});
