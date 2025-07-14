import type { RegistrationData } from "./Register.tsx"
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
            return res
        })
        .catch((err) => {
            console.error(err)
        })
    return res
}

export default register