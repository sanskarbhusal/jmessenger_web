import express from "express"
const app = express()
app.listen(8080, () => console.log("Listening on port 80"))
app.post("/code", (req, res) => {
    console.log(req.body)
})