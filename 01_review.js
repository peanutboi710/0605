const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const PORT = process.env.PORT ?? 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`${PORT}에서 Listen 중`);
});

