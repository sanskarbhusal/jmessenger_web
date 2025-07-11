import type { RegistrationData } from "./Register.tsx"
function register(registrationData: RegistrationData) {

    const url = "http://localhost:3000/register"
    const method = "POST"
    const headers = { "Content-Type": "application/json" }
    const body = JSON.stringify(registrationData)

    const request = new Request(url, { method: method, body: body, headers: headers })
    fetch(request)
        .then((response) => {
            if (response.status != 200) {
                console.log("Something went wrong on API server!")
            }
            return response.text()
        })
        .then((response) => {
            console.log("Response is:")
            console.log(response)
        })
        .catch((err) => {
            console.error(err)
        })

    return false
}
// setInterval(() => {
//     register({} as State)
// }, 500)

export default register