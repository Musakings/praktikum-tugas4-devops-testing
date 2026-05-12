const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps");
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
  });
}

module.exports = app;