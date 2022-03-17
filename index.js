require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const { COCKTAILS_API_HOST, COCKTAILS_API_KEY } = process.env;

const app = express();

app.use(cors());

app.get("/api", (req, res, next) => {
  const searchWord = req.query.s || "margarita";

  const options = {
    method: "GET",
    url: "https://cocktails1.p.rapidapi.com/search.php",
    params: { s: searchWord },
    headers: {
      "x-rapidapi-host": COCKTAILS_API_HOST,
      "x-rapidapi-key": COCKTAILS_API_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
      next(error);
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
