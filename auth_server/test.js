import mongodb from "mongodb"
const { MongoClient, ServerApiVersion } = mongodb
import dotenv from 'dotenv'
dotenv.config({ quite: true })

const uri = process.env.localInstance
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

async function run() {
    try {
        await client.connect()
        await client.db("myDatabase").command({ ping: 1 })
        console.log("Database is connected successfully!")
        await operation()
    } catch (err) {
        console.log(err.stack)
    } finally {
        client.close()
    }
}
run().catch(console.dir)

async function operation() {
    const db = client.db("myDatabase")
    const collection = db.collection("myCollection")
    const peopleDocuments = [
        {
            "name": { "first": "Alan", "last": "Turing" },
            "birth": new Date(1912, 5, 23),
            "death": new Date(1954, 5, 7),
            "contribs": ["Turing Machine", "Turing test", "Turingery"],
            "views": 1250000
        }, {
            "name": { "first": "Grace", "last": "Hopper" },
            "birth": new Date(1906, 12, 9),
            "death": new Date(1992, 1, 1),
            "contribs": ["Mark I", "UNIVAC", "COBOL"],
            "views": 3860000
        }
    ]

    await collection.insertMany(peopleDocuments)

    const filter = {
        "name.last": "Turing"
    }
    const document = await collection.findOne(filter)
    console.log(document)
}