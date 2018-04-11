// const _ = require('lodash');
// const ramda = require('ramda');
//
// let randomText = "thiS iS A RandoM teXt";
//
// randomText = _.toLower(randomText);
//
// // convert to lower case
// console.log(`using toLower : ${randomText}`);
//
// // convert to title case
// randomText = _.startCase(randomText);
// console.log(`using startCase : ${randomText}`);
//
// // convert to ramda
// const add = ramda.add(1,2);
// console.log(`using ramda : ${add}`);

const http = require("http")

const HOST = "localhost"
const PORT = 8000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end("Hello Server!!!!!!")
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOST, err => {
  if (err) {
    return console.log("Something bad happened", err)
  }

  console.log(`Server is listening on ${HOST}:${PORT}`)
})
