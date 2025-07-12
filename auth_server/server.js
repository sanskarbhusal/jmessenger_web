import express from "express"
import cors from "cors"
import { query, collection } from "./database.js"
import bcrypt from "bcrypt"

const app = express()

// app.use(express.text())
app.use(express.json())

const corsOption = {
    origin: "http://localhost",
    optionsSuccessStatus: 200 //some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOption))
const port = 3000

app.post("/register", cors(corsOption), async (req, res) => {
    let success = false
    const queryStatus = await query.performSingle(async () => {
        const { email, userName, password } = req.body
        const found = await collection.findOne({ userName: userName })
        if (found == null) {
            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(password, salt)
            await collection.insertOne({ userName: userName, email: email, password: hashedPassword })
            success = true
            console.log("inserted")
        } else {
            success = false
            console.log("User already exists")
        }
    })
    if (success) {
        res.status(204).send()
    } else {
        if (queryStatus == "error") {
            res.status(500)
        } else {
            //417 means Expectation failed
            res.status(417).send({ log: "Username not available" })
        }
    }
})

app.listen(port, () => {
    console.log("*** Listening on port: ", port)
})