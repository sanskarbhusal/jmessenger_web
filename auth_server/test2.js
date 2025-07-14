import express from "express"
import cookieParser from "cookie-parser"

const app = express()
app.use(cookieParser())
app.get("/", (req, res) => {
    // res.cookie("cookieName", "10,000 ms", { maxAge: 10000 }).send()
    console.log(typeof null)
})

app.listen(2000, () => console.log("localhost:2000"))