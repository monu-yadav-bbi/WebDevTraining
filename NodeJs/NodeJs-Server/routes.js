const fs = require("fs");

const requestHaandler = (request, response) => {
  const url = request.url;
  const method = request.method;
  if (url === "/") {
    response.write("<html>");
    response.write("<head><title>Enter Message</title></head>");
    response.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"> Send </button> </form></body>'
    );
    response.write("</html>");
    return response.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    //getour request data
    request.on("data", (chunk) => {
      //   console.log(chunk); //chunk data

      console.log(chunk.toString());
      body.push(chunk);
      console.log("text:", body);
    });
    return request.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      //   console.log(parseBody); //data in key value pair data which we use
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();
      });
    });
  }

  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  response.write("<head><title>node Page</title></head>");
  response.write("<body><h1>Hello from my Node.js Server</h1></body>");
  response.write("</html>");
  response.end();
};

module.exports = requestHaandler; //exports our requestHandler function
