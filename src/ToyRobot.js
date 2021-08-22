class ToyRobot {
  constructor() {
    this.tableDimensions = 5;
    this.isPlaced = false;
    this.xPos = null;
    this.yPos = null;
    this.currentDirection = null;
  }

  invalidCommand(commandType) {
    return !this.isPlaced && commandType !== CommandType.PLACE;
  }

  validPlace(xPos, yPos) {
    return (
      xPos > -1 &&
      yPos > -1 &&
      xPos < this.tableDimensions &&
      yPos < this.tableDimensions
    );
  }

  processPlace(xPos, yPos, direction) {
    if (this.validPlace(xPos, yPos)) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.currentDirection = direction;
      this.isPlaced = true;
    }
  }

  processLeft() {
    this.currentDirection = NextDirection.get(this.currentDirection).LEFT;
  }

  processRight() {
    this.currentDirection = NextDirection.get(this.currentDirection).RIGHT;
  }

  validMove(newPos) {
    return newPos > -1 && newPos < this.tableDimensions;
  }

  processMove() {
    switch (this.currentDirection) {
      case Direction.NORTH:
        if (this.validMove(this.yPos + 1)) this.yPos++;
        break;
      case Direction.SOUTH:
        if (this.validMove(this.yPos - 1)) this.yPos--;
        break;
      case Direction.EAST:
        if (this.validMove(this.xPos + 1)) this.xPos++;
        break;
      case Direction.WEST:
        if (this.validMove(this.xPos - 1)) this.xPos--;
        break;
      default:
        break;
    }
  }

  processReport() {
    console.log(`${this.xPos},${this.yPos},${this.currentDirection}`);
  }

  processCommand({ commandType, xPos, yPos, direction }) {
    if (this.invalidCommand(commandType)) return;

    switch (commandType) {
      case CommandType.PLACE:
        this.processPlace(xPos, yPos, direction);
        break;
      case CommandType.MOVE:
        this.processMove();
        break;
      case CommandType.LEFT:
        this.processLeft();
        break;
      case CommandType.RIGHT:
        this.processRight();
        break;
      case CommandType.REPORT:
        this.processReport();
        break;
      default:
        break;
    }
  }
}

const CommandType = {
  PLACE: "PLACE",
  MOVE: "MOVE",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  REPORT: "REPORT",
};

const Direction = {
  NORTH: "NORTH",
  SOUTH: "SOUTH",
  EAST: "EAST",
  WEST: "WEST",
};

const NextDirection = new Map([
  [
    Direction.NORTH,
    {
      LEFT: Direction.WEST,
      RIGHT: Direction.EAST,
    },
  ],
  [
    Direction.SOUTH,
    {
      LEFT: Direction.EAST,
      RIGHT: Direction.WEST,
    },
  ],
  [
    Direction.EAST,
    {
      LEFT: Direction.NORTH,
      RIGHT: Direction.SOUTH,
    },
  ],
  [
    Direction.WEST,
    {
      LEFT: Direction.SOUTH,
      RIGHT: Direction.NORTH,
    },
  ],
]);

module.exports = ToyRobot;
