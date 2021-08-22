const { runApp } = require("../app");

describe("application integration tests", () => {
  beforeEach(() => {
    console.log = jest.fn();
    console.error = jest.fn();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should print error if file does not exist", async () => {
    process.argv[2] = "test/data/invalidFile.txt";

    await runApp();

    expect(console.error.mock.calls[0][0]).toBe("ERROR: Input file doesn't exist");
  });

  test("should print correct REPORT for input-1", async () => {
    process.argv[2] = "test/data/input-1.txt";

    await runApp();

    expect(console.log.mock.calls[0][0]).toBe("0,1,NORTH");
  });

  test("should print correct REPORT for input-2", async () => {
    process.argv[2] = "test/data/input-2.txt";

    await runApp();

    expect(console.log.mock.calls[0][0]).toBe("0,0,WEST");
  });

  test("should print correct REPORT for input-3", async () => {
    process.argv[2] = "test/data/input-3.txt";

    await runApp();

    expect(console.log.mock.calls[0][0]).toBe("3,3,NORTH");
  });

  test("should print correct REPORT for input-4", async () => {
    process.argv[2] = "test/data/input-4.txt";

    await runApp();

    expect(console.log.mock.calls[0][0]).toBe("1,2,SOUTH");
    expect(console.log.mock.calls[1][0]).toBe("1,0,SOUTH");
    expect(console.log.mock.calls[2][0]).toBe("0,4,NORTH");
  });
});
