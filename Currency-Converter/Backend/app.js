const ENV = process.env.NODE_ENV || 'production'
require('dotenv').config({
  path: `.env.${ENV}`
});

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/errorController");
const exchangeRouter = require("./routers/exchangeRouter");
const exchangeRateService = require("./service/exchangeRateService")

const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api',exchangeRouter);
app.use(errorController.get404);
const PORT = process.env.PORT || 4000;
async function init(){
  await exchangeRateService.getRates();
  app.listen(PORT, () => {
  console.log(`Server runnning at http://localhost:${PORT}`);
});
}
init();