const cors = require("cors");

const express = require("express");

const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "253165alibek",
});

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/tracks", (req, res) => {
  const query = "SELECT * FROM music.tracks";
  pool.query(query, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/tracks-genre", (req, res) => {
  const query = "SELECT DISTINCT genre FROM music.tracks";
  pool.query(query, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
  console.log(query);
});

app.listen(PORT, () => console.log(`server started on post ${PORT}`));
