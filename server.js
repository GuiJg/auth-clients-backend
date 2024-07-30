require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const clientRoute = require("./routes/clientRoute");

const errorMiddleware = require("./middleware/errorMiddleware");

const MONGO_URL = process.env.MONGO_URL; 

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/client', clientRoute);

app.use(errorMiddleware);

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor iniciado na porta 3000");
            console.log("Conectado ao MongoDB");
            app.get("/", (req, res) => {
              res.send("Servidor conectado!");
            });
        });  
    })
    .catch((err) => {
        console.log(err);
    })