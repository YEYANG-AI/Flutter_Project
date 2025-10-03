const express = require("express");
const router = express.Router();

router.get("/unit", (req, res) => {
  res.send("Hello World from unit route!");
});
router.get("/unit/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello World from unit route! Your ID is ${id}`);
});

router.post("/unit", (req, res) => {
  try {
    res.status(200).send("POST request to the unit route");
  } catch (err) {
    console.log(err);
  }
});
router.put("/unit/:id", (req, res) => {
  try {
    const id = req.params.id;
    res.status(200).send(`PUT request to the unit route. Your ID is ${id}`);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/unit/:id", (req, res) => {
  try {
    const id = req.params.id;
    res.status(200).send(`DELETE request to the unit route. Your ID is ${id}`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
