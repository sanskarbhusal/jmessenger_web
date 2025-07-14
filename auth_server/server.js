import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { v4 as uuidv4 } from "uuid"
import { query, collection } from "./database.js"
// import bcrypt from "bcrypt"

const app = express()
const port = 3000
const corsOption = {
    origin: "http://localhost",
    credentials: true,
    optionsSuccessStatus: 200 //some legacy browsers (IE11, various SmartTVs) choke on 204
}

/* using the middlewares. The text and json middleware are required to  parse
the html body as text and as json respectively and the cookieParser 
middleware to parse the cookie into js object
*/

app.use(cors(corsOption))
app.use(express.text())
app.use(express.json())
app.use(cookieParser())

let registrationRequest
app.post("/register", async (req, res) => {

    const queryStatus = await query.performSingle(async () => {

        const { email, userName, password } = req.body.userName
        const found = await collection.findOne({ _id: userName })

        if (found == null) {
            console.log("Requested username is available")
            const otp_session_id = uuidv4()
            registrationRequest = { email, userName, password, otp_session_id }
            //
            //sending otp          
            const status = await (async () => {
                return "not_sent"
            })()

            res.status(202)
                .cookie("otpSessionId", otp_session_id, {
                    httpOnly: true,
                    sameSite: "strict",
                    maxAge: 300000,
                    secure: true
                })
                .send()
            console.log(req.cookies)
        } else {
            res.status(200).send()
            console.log("Requested username is not available")
        }
    })

    if (queryStatus == "error") {
        console.log("Some error in performSingle() query")
    }
})

app.listen(port, () => {
    console.log("*** Listening on port: ", port)
})