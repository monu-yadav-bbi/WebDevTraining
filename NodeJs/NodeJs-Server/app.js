// const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
// console.log(express);
const app = express();

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

// const routes = require("./routes"); //import routes js file
// console.log(fs);
// console.log(http);

// const server = http.createServer(routes);

// app.use((req, res, next) => {
//   console.log("Time: %d", Date.now());
//   next();
// });  Timestamp in milllisecond

app.use(bodyParser.urlencoded({ extended: false })); //parse the incoming body by using 3rd package body-parser, data which is send through form , extended: false bcz

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

//  always excutes for all request get, POST
// app.use("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.use((req, res, next) => {
//   console.log("In the middleware!");
//   next(); //allow to go to next middleware
// });

// const server = http.createServer(app);
// server.listen(3000);
//  or

app.listen(3000); //it call http create server and passes itself appobject
