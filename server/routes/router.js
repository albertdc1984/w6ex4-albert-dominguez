const express = require("express");

const router = express.Router();
const debug = require("debug")("router:");

router.get("/sum", (req, res) => {
  debug("whatever");
  res.json({ sum: [`hola`] });
});

router.get("/substraction", (req, res) => {
  debug("whatever");
  res.json({ substraction: [`hola`] });
});

router.get("/multiply", (req, res) => {
  debug("whatever");
  res.json({ substraction: [`hola`] });
});

router.get("/division", (req, res) => {
  debug("whatever");
  res.json({ substraction: [`hola`] });
});

router.get("/", (req, res) => {
  res.json({ answer: "fuck you" });
  debug("nothing");
});

module.exports = router;
