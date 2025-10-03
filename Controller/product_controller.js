exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    res.send(`controller request to the product route. Your ID is ${id}`);
  } catch (err) {
    console.log("server error:" + err);
  }
};
exports.ListData = async (req, res) => {
  try {
    // res.send(`controller ListData request to the product route.}`);
    res.json({
      productInfo: "controller ListData request to the product route.",
    });
  } catch (err) {
    console.log("server error:" + err);
  }
};
exports.SaveData = async (req, res) => {
  try {
    res.send(`controller postData request to the product route.}`);
  } catch (err) {
    console.log("server error:" + err);
  }
};
exports.UpdateData = async (req, res) => {
  try {
    const id = req.params.id;
    res.send(
      `controller updateData request to the product route. Your ID is ${id}`
    );
  } catch (err) {
    console.log("server error:" + err);
  }
};
exports.DeleteData = async (req, res) => {
  try {
    const id = req.params.id;
    res.send(
      `controller DeleteData request to the product route. Your ID is ${id}`
    );
  } catch (err) {
    console.log("server error:" + err);
  }
};
