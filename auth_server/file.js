import express from "express"
import cors from "cors"
const app = express()
app.listen(8080, () => console.log("Listening on port 80"))
const corsOption = {
    origin: ""
}
app.use(cors(corsOption))
app.post("/code", (req, res) => {
    console.log(req.body)
    res.send("Success")
})