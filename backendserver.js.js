const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Modern Desi Backend Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
