//Defing structure of the chatData object and it's nested objects
interface Message {
    type: "text" | "file" | "photo" | "url" //Only implement text for now. We don't have time to develop every freakin' feature.
    content: string; //Since, only text will be implemented, string is okay for now.
    sender: "user" | "chat" //Required to distinguish messages that are of the user from the chat's.
    timestamp: string; // ISO 8601 time format. 
}

interface Chat {
    chatName: string //Full name that the chat (not the user).
    chatType: "private" | "group"
    chatId: string //This should hold the unique id representing the chat (not the user)
    history: Message[] //"history" is an array because, messages are stacked based on time. Array serves the purpose of stack.
}

interface ChatData {
    chatList: Chat[]
}

// Hard coding a dummy chatData object for testing
const chat1: Chat = {
    chatName: "Anil Gyawali",
    chatType: "private",
    chatId: "001",
    history: [
        {
            type: "text", //remember, we only will implement text type for now.
            content: "Hi, sanskar",
            sender: "chat",
            timestamp: "2025-01-13"
        },
        {

            type: "text", //remember, we only will implement text type for now.
            content: "Hello, Anil",
            sender: "user",
            timestamp: "2025-01-13"
        }
    ],
}


const chat2: Chat = {
    chatName: "Rojisha",
    chatType: "private",
    chatId: "002",
    history: [
        {
            type: "text", //remember, we only will implement text type for now.
            content: "Hi, sanskar",
            sender: "chat",
            timestamp: "2025-01-13"
        },
        {

            type: "text", //remember, we only will implement text type for now.
            content: "Hello, Hello Rojisha",
            sender: "user",
            timestamp: "2025-01-13"
        }
    ],
}

const chat3: Chat = {
    chatName: "Himal Rawat",
    chatType: "private",
    chatId: "003",
    history: [
        {
            type: "text", //remember, we only will implement text type for now.
            content: "Hi, sanskar",
            sender: "chat",
            timestamp: "2025-01-13"
        },
        {

            type: "text", //remember, we only will implement text type for now.
            content: "Hello, Himal",
            sender: "user",
            timestamp: "2025-01-13"

        }
    ]
}

const chatData: ChatData = {
    chatList: [chat1, chat2, chat3]
}

//To serialize the chatData into JSON to send it to the database server
const json = JSON.stringify(chatData)
console.log(json)

export default chatData
export type { ChatData }