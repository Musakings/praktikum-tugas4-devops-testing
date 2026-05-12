const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps");
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Musa" },
    { id: 2, name: "Admin" },
  ]);
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server berjalan di port 3000");
  });
}

module.exports = app;