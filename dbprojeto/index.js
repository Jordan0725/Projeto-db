require("dotenv").config(); 

const db = require("./db");

const port = process.env.PORT;

const express = require('express');

const app = express();

app.use(express.json());


// Rota para inserir clientes
app.post("/client", async(req, res) =>{
    await db.insertCustomers(req.body);
    res.sendStatus(201);
})

app.listen(port);

console.log("Backend Rodando!")