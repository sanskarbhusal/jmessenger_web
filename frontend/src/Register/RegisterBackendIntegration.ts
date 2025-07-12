import type { RegistrationData } from "./Register.tsx"
function register(registrationData: RegistrationData) {

    const url = "http://localhost:3000/register"
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify(registrationData)

    const request = new Request(url, { method: method, body: body, headers: headers })
    let status = 0
    fetch(request)
        .then((response) => {
            status = response.status
            return status
        })
        .then((response) => {
            switch (response) {
                case 204:
                    console.log("User registered")
                    break;
                case 417:
                    console.log("Username Unavailable")
                    break;
                case 500:
                    console.log("Database error.")
                    break;
                default:
                    console.log("Unknown response from the server")
            }
        })
        .catch((err) => {
            console.error(err)
        })
    return status
}

export default register