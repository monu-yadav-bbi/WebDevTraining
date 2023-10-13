const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  //   console.log("In another middleware!");
  res.sendFile("/NodeJs/NodeJs-Server/views/shop.html");
});

module.exports = router;
