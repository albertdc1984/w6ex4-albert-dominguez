const express = require("express");

const app = express();
const debug = require("debug");

app.use(express.json());

const initializeServer = async (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error) => {
      debug(`Error on server; `, error.message);
      reject();
    });
  });

app.use((req, res, next) => {
  debug(`a request has arrived to ${req.url}`);
  next();
});

exports.initializeServer = initializeServer;
