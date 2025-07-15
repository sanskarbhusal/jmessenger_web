import type { RegistrationData } from "../Register/Register.tsx"

async function register(registrationData: RegistrationData) {
    const url = "http://localhost:3000/register"
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify(registrationData)
    const request = new Request(url, { method: method, body: body, headers: headers, credentials: "include" })
    let res = { status: 0, text: "" }
    await fetch(request)
        .then(async (response) => {
            res.status = response.status
            res.text = await response.text()
            //only required if you chain another then
            return response
        })
        .catch((err) => {
            console.error(err)
        })
    return res
}

async function sendOtp(otp: object) {
    const url = "http://localhost:3000/otp-new-account"
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify(otp)
    const request = new Request(url, { method, body, headers, credentials: "include" })

    let res = { status: 0, text: "" }
    await fetch(request)
        .then(async (response) => {
            res.status = response.status
            res.text = await response.text()
            //only required if you chain another then
            return response
        }).catch((err) => {
            console.error(err)
        })
    return res
}

export { register, sendOtp }