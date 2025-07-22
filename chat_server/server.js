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

//I'm using lock to ensure safe aynchronous mutations if there are any.
//Lock suppossedly works well with event loop in node.js. In java we declare blocks as "synchronized" to prevent race condition.
let isOnlineUsersLocked = false
let onlineUsers = [
    {
        userName: "test_userName",
        loginSessionId: "test_login_session_id"
    }
]

function isOnline(userName) {
    let found
    if (!isOnlineUsersLocked) {
        isOnlineUsersLocked = true
        found = onlineUsers.find((item) => { item.userName == msg.userName })
        isOnlineUsersLocked = false
    } else {
        console.log("Can't read online users list due to synchronization issue.")
    }
    return found //returns undefined or, string 
}

io.on('connection', (socket) => {

    //client sent event listeners
    console.log(socket.id)
    socket.on("registerOnline", (obj) => {
        onlineUsers.push({ userName: obj.userName, loginSessionId: obj.loginSessionId, socket: socket })
    })

    socket.on("isOnline", (obj, ack) => {
        console.log(obj)
        if (isOnline(obj.userName)) {
            ack("true")
        } else {
            ack("false")
        }
    })

    socket.on("sendMsg", (obj) => {
        console.log(obj)

    })

    socket.on("disconnect", () => {
        console.log("User disconnected")
    })
    //server sent events
    socket.emit("ping",)

})

const port = 4000

server.listen(port, () => {
    console.log("Listening on port: " + port)
})

