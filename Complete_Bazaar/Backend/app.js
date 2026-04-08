require('dotenv').config();

// External Module
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const errorController = require("./controllers/errorController");
const cors = require("cors");
const sellerRouter = require('./routers/sellerRouter');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use('/api/seller',sellerRouter);
app.use(errorController.get404);

const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@airbnb.s8zku2p.mongodb.net/${process.env.MONGO_DB_DATABASE}?appName=Airbnb`;
const PORT = process.env.PORT || 3000;
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
})