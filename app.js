const { readInputFile } = require("./src/fileReader");
const { processCommands } = require("./src/commandProcessor");

async function runApp() {
  const commands = await readInputFile();

  if (commands) await processCommands(commands);
}

module.exports = { runApp };
