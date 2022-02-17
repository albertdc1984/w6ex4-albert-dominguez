require("dotenv").config();

const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT || 3005;

(async () => {
  await initializeServer(port);
})();
