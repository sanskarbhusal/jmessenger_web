const thenable = {
    then(resolve, reject) {
        // resolve(10)
        reject(new Error("Oppsie daisy"))
    }
}
await thenable.catch(() => {
    console.log("Caught you")
    return "Default error message of catch"
})