const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

function connect() {
    mongoose
        .connect(
            `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.6n3zh.mongodb.net/test`
        )
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((error) => {
            console.log("Nao conectado ao banco de dados, " + error);
        });
}
module.exports = connect;
