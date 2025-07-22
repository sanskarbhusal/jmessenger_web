import express from "express"
import { createServer } from "node:http"
import { Server } from "socket.io"
import cors from "cors"

const corsOption = {
    origin: "http://localhost",
    credentials: true,
    optionsSucessStatus: 200

}

const app = express()
app.use(cors(corsOption))
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost",
        methods: ["POST", "GET"]
    }
})

const onlineUsers = [
    {
        userName: "test_userName",
        loginSessionId: "test_login_session_id"
    }
]

io.on('connection', (socket) => {
    console.log("A user is connected.")
    socket.on("disconnect", () => {
        console.log("User disconnected")
    })
    socket.on("getOnline", (obj) => {
        console.log(obj)
        onlineUsers.push(obj)
    })
    socket.on("isOnline", (userName) => {

    })
})

const port = 4000
server.listen(port, () => {
    console.log("Listening on port: " + port)
})

