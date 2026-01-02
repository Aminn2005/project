import express from "express";
import pg from "pg";
import cors from "cors"

const {Client} = pg;
const port = 5001;
const app = express();

app.use(cors());
app.use(express.json());

const db = new Client({
  host: "dpg-d4sttleuk2gs73cmuvd0-a.virginia-postgres.render.com",
  port: 5432,
  user: "********",
  password: "********",
  database: "********",
  ssl: { rejectUnauthorized: false }
});

db.connect()
.then(() => console.log('Connected to Render Postgres'))
  .catch(err => console.error('Connection error', err));

app.get("/phone", async (req, res) => {
  try{
    const result = await db.query("SELECT * FROM phone ORDER BY id ASC;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database Error");
  }
});

app.get("/laptop", async (req, res) => {
  try{
    const result = await db.query("SELECT * FROM laptop ORDER BY id ASC;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database Error");
  }
});

app.get("/console", async (req, res) => {
  try{
    const result = await db.query("SELECT * FROM console ORDER BY id ASC;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database Error");
  }
});

app.get("/headphone", async (req, res) => {
  try{
    const result = await db.query("SELECT * FROM headphone ORDER BY id ASC;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database Error");
  }
});

app.get("/tablet", async (req, res) => {
  try{
    const result = await db.query("SELECT * FROM tablet ORDER BY id ASC;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database Error");
  }
});

app.get("/accounts", async (req, res) => {
  try{
    const result = await db.query("SELECT * FROM public.accounts ORDER BY id ASC;");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database Error");
  }
});

app.post("/update-item", async (req, res) => {
  try {
    const SQLCommand = req.body.sql;

    db.query(SQLCommand, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("SQL Error");
      }
      res.send("OK");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});




app.listen(port, () => console.log("SERVER IS RUNNING ON PORT " + port + " !"));
