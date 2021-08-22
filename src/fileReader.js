const fs = require("fs");
const readline = require("readline");

async function readInputFile() {
  try {
    const filename = process.argv[2];
    if (fileNotExists(filename)) {
      console.error(`ERROR: Input file doesn't exist`);
      return null;
    }

    const fileStream = fs.createReadStream(filename);
    fileStream.on("error", function (err) {
      console.log(err.message);
    });

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let commands = [];
    for await (const line of rl) {
      commands.push(line);
    }

    return commands;
  } catch (err) {
    console.log(err.message);
  }
}

function fileNotExists(filename) {
  return !fs.existsSync(filename);
}

module.exports = { readInputFile };
