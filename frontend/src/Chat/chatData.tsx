//Defing structure of the chatData object and it's nested objects

interface Message {
    contentType: "text" | "file" | "photo" | "url"; //Only implement text for now. We don't have time to develop every freakin' feature.
    content: string; //Since, only text will be implemented, string is okay for now.
    sender: "You" | "chat"; //Required to distinguish messages that are of the user from the chat's.
    isMessageUploaded: boolean;
    isMessageDelivered: boolean;
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
            content: "Hi. I'm Suman.",
            sender: "chat",
            isMessageUploaded: false,
            isMessageDelivered: false,
            timestamp: "2025-01-13"
        },
        {
            contentType: "text", //remember, we only will implement text type for now.
            content: "Hello, Suman!",
            sender: "You",
            isMessageUploaded: false,
            isMessageDelivered: false,
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
            content: "Hi. I'm Santosh",
            sender: "chat",
            isMessageUploaded: false,
            isMessageDelivered: false,
            timestamp: "2025-02-15"

        },
        {
            contentType: "text", //remember, we only will implement text type for now.
            content: "Hi, Santosh",
            sender: "You",
            isMessageUploaded: false,
            isMessageDelivered: false,
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
            content: "Hey, what's your thought on software development? Is computer engineering the correct path to become software engineer?",
            sender: "chat",
            isMessageUploaded: false,
            isMessageDelivered: false,
            timestamp: "2025-03-17"
        },
        {
            contentType: "text", //remember that we only will implement text type for now.
            content: "Software is cool. If you can program (without AI), you'll outsmart your way through any software dev job. Regarding computer engineering, I'm not quite sure. It's obviously one the ways to become software engineer, but do remember that there are programmers in the industry that have nothing to do with engineering. So, I guess, it depends on what level of a computer wizard you want to become. Obviously, computer engineers have dynamic knowledge, but they get that by sacrificing specialization. I see computer engineers through 'Jack of all, master of none' analogy. Why? because they study every freakin' thing about a computer, and on doing that specialization is sacrificed. They never get to learn anything deeply enough to be hired. No wonder most end up unemployed and few as a dish washer in restaurants draining years of learning into the sink 😆.",
            sender: "You",
            isMessageUploaded: false,
            isMessageDelivered: false,
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

//Query processor (continuing)

function getChatHistory(chatId: string): Message[] {
    const chat = chatData.chatList.find((element) => {
        return element.chatId == chatId ? true : false
    })
    if (chat != undefined) {
        return chat!.history
    } else {
        return [{
            contentType: "text",
            content: "[_default_text_on_behalf_of_you]",
            sender: "You",
            isMessageUploaded: false,
            isMessageDelivered: false,
            timestamp: "look up calander"
        },
        {
            contentType: "text",
            content: `[_default_text_from_${chatId}]`,
            sender: "chat",
            isMessageUploaded: false,
            isMessageDelivered: false,
            timestamp: "look up calander"
        }

        ]
    }
}

const query = { getChatHistory }
export { query }
export type { Message, Chat, ChatData }
export default chatData