const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const path = require("path");

// Middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Security
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(express.json());

// Routes
app.use("/api", routes.router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "itunes-app/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "itunes-app", "build", "index.html"));
  });
}

// listening on port 8000
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
