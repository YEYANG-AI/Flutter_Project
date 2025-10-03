const express = require("express");
const router = express.Router();
const {
  read,
  ListData,
  UpdateData,
  SaveData,
  DeleteData,
} = require("../Controller/product_controller");

router.get("/products", ListData);
router.get("/products/:id", read);
router.post("/products", SaveData);
router.put("/products/:id", UpdateData);
router.delete("/products/:id", DeleteData);

module.exports = router;
