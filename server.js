const express = require("express");
const { readdirSync } = require("fs");
const morgan = require("morgan");
const app = express();
const bodypaser = require("body-parser");
const cors = require("cors");

app.use(morgan("dev"));
app.use(bodypaser.json({ limit: "10mb" }));
app.use(cors());
readdirSync("./Routes").map((r) => app.use("/api", require(`./Routes/${r}`)));

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
