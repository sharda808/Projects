const ENV = process.env.NODE_ENV || 'production'
require('dotenv').config({
  path:`.env.${ENV}`
});

const express = require('express');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');

const errorController = require('./controllers/errorController');
const itemsRouter = require('./routers/ItemsRouter');


const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@airbnb.s8zku2p.mongodb.net/${process.env.MONGO_DB_DATABASE}?appName=Airbnb`;
const app = express();
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(itemsRouter);         
app.use(errorController.get404);
// Connect to MongoDB and start server
const PORT = process.env.PORT || 3000;
mongoose.connect(MONGO_DB_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  })
  .catch(err => console.log(err));
