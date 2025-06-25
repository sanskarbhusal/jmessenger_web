const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
console.log(typeof express)
app.get("/", (req, res) => { res.sendFile(__dirname + "/index.html") })

let seedValue = 1
let userCount = 1
let onlineUsers = []
io.on('connection', (socket) => {
    //registration handshake
    socket.on("id request", () => {
        console.log("A user is requesting id.")
        uniqueSessionId = seedValue++
        onlineUsers.push({ sessionId: uniqueSessionId, socket: socket })
        socket.emit("id response", { sessionId: uniqueSessionId })
        console.log("User ID:", uniqueSessionId, " is created. Total online:", userCount++)
    })

    socket.on("chat message", (({ userId, msg }) => {
        console.log("Message from user-", userId, ":", msg)

        socket.emit("chat message", {
            msg: `Hi, this is server. I got your message stating "${msg}".`
        })
    }))
});
server.listen(8080, () => {
    console.log("Listening on port 80 for http.")
})


