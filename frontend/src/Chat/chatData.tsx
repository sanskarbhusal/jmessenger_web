//Defing structure of the chatData object and it's nested objects
interface Message {
    contentType: "text" | "file" | "photo" | "url" //Only implement text for now. We don't have time to develop every freakin' feature.
    content: string; //Since, only text will be implemented, string is okay for now.
    sender: "You" | "chat" //Required to distinguish messages that are of the user from the chat's.
    timestamp: string; // ISO 8601 time format. 
}

interface Chat {
    chatName: string //Full name that the chat (not the user).
    chatType: "private" | "group"
    chatId: string //This should hold the unique id representing the chat (not the user)
    history: Message[] //"history" is an array because, messages are stacked based on time. Array serves the purpose of stack.
}

interface ChatData {
    userId: string //UserId is fetched from local storage. It's stored there during login.
    chatList: Chat[]
}

// Hard coding a dummy chatData object for testing
const chat1: Chat = {
    chatName: "Suman",
    chatType: "private",
    chatId: "001",
    history: [
        {
            contentType: "text", //remember, we only will implement text type for now.
            content: "Hi, sanskar",
            sender: "chat",
            timestamp: "2025-01-13"
        },
        {
            contentType: "text", //remember, we only will implement text type for now.
            content: "Hello, Suman!",
            sender: "You",
            timestamp: "2025-01-14"
        }
    ],
}

const chat2: Chat = {
    chatName: "Santosh",
    chatType: "private",
    chatId: "002",
    history: [
        {
            contentType: "text", //remember, we only will implement text type for now.
            content: "Hi, sanskar",
            sender: "chat",
            timestamp: "2025-02-15"
        },
        {
            contentType: "text", //remember, we only will implement text type for now.
            content: "Hi, Santosh",
            sender: "You",
            timestamp: "2025-02-16"
        }
    ],
}

const chat3: Chat = {
    chatName: "Sanskar",
    chatType: "private",
    chatId: "003",
    history: [
        {
            contentType: "text", //remember, we only will implement text type for now.
            content: "Hi, sanskar",
            sender: "chat",
            timestamp: "2025-03-17"
        },
        {
            contentType: "text", //remember that we only will implement text type for now.
            content: " Web frontend is so easy. Lots of complicated graphics programming and data encoding/decoding is abstrated and automated. Like for example this emoji works out of the box 😆. You just copy the emojy from any platfrom and the emoji data is decoded and rendered properly in the browser. You need not be a programming wizard to be able to show emojis.",
            sender: "You",
            timestamp: "2025-03-18"
        }
    ]
}

const chatData: ChatData = {
    userId: "@sanskar",
    chatList: [chat1, chat2, chat3]
}

//To serialize the chatData into JSON to send it to the database server
// const json = JSON.stringify(chatData)
// console.log(json)

export default chatData
export type { Message, Chat, ChatData }