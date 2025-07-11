import express from "express"
import cors from "cors"
const app = express()
app.use(express.text())
app.use(express.json())
const corsOption = {
    origin: "http://localhost",
    optionsSuccessStatus: 200 //some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOption))

const port = 3000

app.post("/register", cors(corsOption), (req, res) => {
    console.log(req.body)
    console.log(typeof req.body)
    res.status(200)
})

app.listen(port, () => {
    console.log("*** Listening on port: ", port)
})