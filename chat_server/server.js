import express from "express"
import { createServer } from "node:http"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"
import { Server } from "socket.io"

const app = express()
const server = createServer(app)
const io = new Server(server)

const __dirname = dirname(fileURLToPath(import.meta.url))

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, '/index2.html'))
})

io.on('connection', (socket) => {
    console.log("A user is connected.")
    console.log(socket)
})

server.listen(3000, () => {
    console.log("Listening on port: 3000")
})

