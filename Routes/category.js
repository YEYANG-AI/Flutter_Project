const express = require("express");
const router = express.Router();

router.get("/category", (req, res) => {
  res.send("Hello World from category route!");
});
router.get("/category/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello World from category route! Your ID is ${id}`);
});

router.post("/category", (req, res) => {
  try {
    res.status(200).send("POST request to the category route");
  } catch (err) {
    console.log(err);
  }
});
router.put("/category/:id", (req, res) => {
  try {
    const id = req.params.id;
    res.status(200).send(`PUT request to the category route. Your ID is ${id}`);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/category/:id", (req, res) => {
  try {
    const id = req.params.id;
    res
      .status(200)
      .send(`DELETE request to the category route. Your ID is ${id}`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
