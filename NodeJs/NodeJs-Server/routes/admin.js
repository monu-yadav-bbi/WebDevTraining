const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send(
    '<html><head><form action= "/product" method="POST"><input type="text" name = "title"><button type="submit">Add Product</button></form></head></html>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
