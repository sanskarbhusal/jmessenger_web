import express from "express"
import cors from "cors"
const app = express()

const corsOption = {
    origin: "http://localhost:8080",
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOption))
app.use(express.text())
app.listen(8080, () => console.log("Listening on port 8080"))

app.get("/", (req, res) => { res.sendFile("/home/sanskar/jmessenger_web/auth_server/index.html") })

app.post("/code", (req, res) => {

    console.log(req.body)

})