const ToyRobot = require("./ToyRobot");

async function processCommands(commands) {
  // console.log(commands);
  const newToyRobot = new ToyRobot();

  for (const command of commands) {
    processCommand(command, newToyRobot);
  }
}

function processCommand(command, toyRobot) {
  try {
    toyRobot.processCommand(createCommandPayload(command.trim()));
  } catch (error) {
    console.error(error);
  }
}

function createCommandPayload(command) {
  if (commandHasArgs(command)) {
    const commandType = command.split(" ")[0];
    const commandArgs = getCommandArgs(command);
    return {
      commandType,
      ...commandArgs,
    };
  }

  return {
    commandType: command,
  };
}

function commandHasArgs(command) {
  return command.includes(" ");
}

function getCommandArgs(command) {
  const args = command.split(" ")[1].split(",");

  return {
    xPos: parseInt(args[0]),
    yPos: parseInt(args[1]),
    direction: args[2],
  };
}

module.exports = {
  processCommands,
  processCommand,
};
