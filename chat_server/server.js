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
    socket.on("disconnect", () => {
        console.log("User disconnected")
    })
})

const port = 4000
server.listen(port, () => {
    console.log("Listening on port: " + port)
})

