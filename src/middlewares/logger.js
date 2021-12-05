const http = require("http");
const fs = require("fs");
const logger = (req, res, next) => {
  const date = new Date();
  const dateString = `${date.getDay()}${date.getMonth()}${date.getFullYear()}`;
  // Create the log entry string.
  let logEntry =
    `date: ${dateString} method: ${req.method} body: ${JSON.stringify(
      req.body
    )} ` +
    "\nheaders:" +
    JSON.stringify(req.headers) +
    "\n---------------------------\n";

  // If log file exists append the log entry to the file.
  fs.exists(`./logs/log${dateString}.txt`, (exists) => {
    if (exists) {
      fs.appendFile(`./logs/log${dateString}.txt`, logEntry, "utf8", (err) => {
        if (err) console.log(err);
        else console.log("Log entry is added to existing log file.");
      });
    } else {
      // If log file does not exist, create the file and then log the entry.
      fs.writeFile(`./logs/log${dateString}.txt`, logEntry, (err) => {
        if (err) console.log(err);
        else console.log("New log file is created and entry is written.");
      });
    }
  });
  next();
};

module.exports = logger;
