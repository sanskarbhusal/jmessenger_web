import type { RegistrationData } from "./Register.tsx"
async function register(registrationData: RegistrationData) {

    const url = "http://localhost:3000/register"
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify(registrationData)

    const request = new Request(url, { method: method, body: body, headers: headers, credentials: "include" })
    let status = 0
    await fetch(request)
        .then((response) => {
            status = response.status
            return status
        })
        .catch((err) => {
            console.error(err)
        })
    return status
}

export default register