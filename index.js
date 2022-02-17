require("dotenv").config();

const port = process.env.SERVER_PORT || 3005;
const initializeServer = require("./server/index");

(async () => {
  await initializeServer(port);
})();
