require("dotenv").config();
const express = require("express");
const path = require("path");
const body_parser = require("body-parser");
const cookie_parser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const { API_PORT, BASE_URL, LOGGING } = require("./api/common/constans");

// INIT EXPRESS
const app = express();

// prevent cors
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(cookie_parser());

/* Load API Routes */
const route_v1 = require(path.join(__dirname, "/api/v1/route"));

app.use(
  body_parser.json({
    limit: "500mb",
  })
);

app.use(express.static(path.join(__dirname, "api")));

const dir = path.join(__dirname, "public");
// app.disable("x-powered-by");
app.use(cookie_parser());
app.use(express.static(dir));

app.use("/images", express.static("banner"));
app.use("/images", express.static("home"));
app.use("/api/v1", route_v1);
// app.use(error);
// // catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(400).json({
    meta: {
      code: 400,
      message: "Unsupported request",
    },
  });
  next();
});

app.listen(API_PORT, async (err) => {
  if (err) {
    throw LOGGING(err);
  } else {
    LOGGING(`Server is running at ${BASE_URL}:${API_PORT}`);
  }
});
