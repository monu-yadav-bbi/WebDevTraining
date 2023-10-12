const http = require("http");
const express = require("express");
// console.log(express);
const app = express();
// const routes = require("./routes"); //import routes js file
// console.log(fs);
// console.log(http);

// const server = http.createServer(routes);
app.use((request, response, next) => {
  console.log("In the middleware!");
  next(); //allow to go to next middleware
});
app.use((request, response, next) => {
  console.log("In another middleware!");
});
const server = http.createServer(app);
server.listen(3000);
