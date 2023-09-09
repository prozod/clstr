const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const bodyParser = require("body-parser");
const app = express();
app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const redirectUriAfterLogin = "http://localhost:5173";

app.get("/token", async (req, res) => {
  console.log("Code: ", req.query.code);
  const params = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.query.code}&redirect_uri=${redirectUriAfterLogin}`;
  const accessTokenUrlRetrieval =
    new URL("https://github.com/login/oauth/access_token") + params;

  console.log("Fetching " + accessTokenUrlRetrieval);

  await fetch(accessTokenUrlRetrieval, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("acces token: ", data["access_token"]);
      res.cookie("accessToken", data["access_token"]);
      res.json(data);
    })
    .catch((err) => console.error(err));
});

app.listen(5100, () => console.log("Server listening on port 5100"));
