const { Server } = require('socket.io')
const io = new Server(server)

const express = require('express')
const app = express();

const http = require('http')
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
app.use(express.static('public'));
