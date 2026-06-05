const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());

app.post("/chat", async (req, res) => {
    console.log({...req.body});
    res.json({...req.body});
});

app.listen(PORT, () => {
    console.log(`${PORT}에서 Listen 중`);
});

