const express = require('express')
const app = express()
const bcrypt = require("bcrypt")
app.use(express.json())
app.listen(3000)
users = []

app.get("/users", (req, res) => {
    res.json(users)
})

app.post("/users", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = { user: req.body.user, password: hashedPassword }
        users.push(user)
        res.status(201).send({ success: true })
    } catch {
        res.status(500).send()
    }
})

app.post("/login", async (req, res) => {
    try {
        const user = users.find((item) => {
            return req.body.user == item.user
        })
        if (user != null) {
            const loginSuccess = await bcrypt.compare(req.body.password, user.password)
            res.send({ userFound: true, loginSuccess: loginSuccess })
        } else {
            res.send({ userFound: false })
        }
    } catch {
        res.status(500).send({ error: "database exploded!" })
    }
})

app.post("/", async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send({ ResponseKey: "ResponseValue" })
    } catch {
        console.log("Error while reading request body")
        res.status(300)
    }
})