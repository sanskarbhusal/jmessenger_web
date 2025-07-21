import express from "express"
import { createServer } from "node:http"
import { Server } from "socket.io"

const app = express()
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost"
    }
})



io.on('connection', (socket) => {
    console.log("A user is connected.")
    console.log(socket)
})

server.listen(3000, () => {
    console.log("Listening on port: 3000")
})

