import { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const url = process.env.localInstance
const dbName = "jmessenger"
const collectionName = "registration"

const client = new MongoClient(url)

//set the database to be used
const db = client.db(dbName)

// set the collection on the specified database to use
const collection = db.collection(collectionName)

async function connect() {
    try {
        await client.connect()
        console.log("Database connected")
    } catch (err) {
        console.log("Error while connecting to db")
    }
}

async function performSingle(callback) {
    let error = true
    await connect()
    try {
        await callback()
        error = false
    } catch (err) {
        console.log("Error during database operation.")
        console.log(err)
    }
    try {
        client.close()
        console.log("Database disconnected.")
    } catch (err) {
        console.log("Error while closing database connection.")
    }
    const status = error ? "500" : "200"
    return status
}

async function performBatch(callbacks) {
    await connect()
    for (let index in callbacks) {
        try {
            await callbacks[index]()
            console.log(`Db operation ${++index} successfull.`)
        } catch (err) {
            console.log(`Db operation ${++index} FAILED.`)
        }
    }
    try {
        client.close()
        console.log("Database connection is closed successfully.")
    } catch (err) {
        console.log("Error while closing database connection.")
    }
}

async function performTransaction(callbacks) {
    await connect()
    let error = false
    console.log("")
    console.log("****** Transaction started ******")
    console.log("")
    for (let index in callbacks) {
        try {
            if (!error) {
                await callbacks[index]()
            }
            console.log(`Db operation ${++index} ${error ? "Cancelled" : "Success"}`)
        } catch (err) {
            console.log(`Db operation ${++index} FAILED\t<<----- error occured`)
            error = true
        }
    }
    console.log("")
    console.log(`****** Transaction closed with ${error ? "error" : "SUCCESS"} ******\t`)
    console.log("")
    try {
        await client.close()
        console.log("Database is disconnected.")
    } catch (err) {
        console.log("Error while closing database connection.")
    }
}
const query = { performSingle: performSingle, performBatch: performBatch, performTransaction: performTransaction }
export { query, collection }