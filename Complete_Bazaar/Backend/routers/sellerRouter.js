const express = require('express');
const multer = require('multer');
const sellerController = require('../controllers/sellerController');
const sellerRouter = express.Router();
const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null, 'uploads/');
  },
  file:(req,file,cb) => {
    cb(null, Math.random().toString(36).substring(2,8) + '-' + file.originalname);
  }
})
sellerRouter.post("/produtcs", sellerController.createProduct);
module.exports = sellerRouter;