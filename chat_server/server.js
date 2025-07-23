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
        userName: "init",
        loginSessionId: "init"
    }
]

function isOnline(userName) {
    let found
    if (!isOnlineUsersLocked) {
        isOnlineUsersLocked = true
        found = onlineUsers.find((item) => item.userName == userName)
        isOnlineUsersLocked = false
    } else {
        console.log("Can't read online users list due to synchronization issue.")
    }
    return found == undefined ? false : true//returns undefined or, string 
}

io.on('connection', (socket) => {

    //client event listeners

    //Done
    const socketId = socket.id
    socket.on("registerOnline", (obj) => {
        const userName = obj.userName
        if (isOnline(userName)) {
            const index = onlineUsers.findIndex((item) => item.userName == userName)
            onlineUsers[index] = { userName, socketId }
        } else {
            onlineUsers.push({ userName, socketId })
        }
        console.log(`"${userName}" online`)
        console.log("Total online ", onlineUsers.length)
    })

    //Done
    socket.on("disconnect", () => {
        const found = onlineUsers.find((item) => item.socketId == socketId)
        if (found != undefined) {
            console.log(`"${found.userName}" offline`)
            onlineUsers = onlineUsers.filter((item) => item.socketId != socket.id)
            console.log("Total online after: ", onlineUsers.length)
        }
    })

    //Done
    socket.on("isOnline", (obj, ack) => {
        //eg.ack(msg) on server
        console.log(obj.userName)
        const response = isOnline(obj.userName) ? "true" : "false"
        console.log(response)
        ack(response)
    })

    //Working...
    socket.on("getContactList", (obj) => {
        const userName = obj.userName
        console.log("Requested contactList")
    })
})

const port = 4000

server.listen(port, () => {
    console.log("Listening on port: " + port)
})

