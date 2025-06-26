interface Chat {
    chatName?: string
    chatType?: string
    chatId?: string
    history?: {}
}

interface ChatData {
    chatList: Chat[]
}

const chat1: Chat = {
    chatName: "Anil",
    chatType: "Private",
    chatId: "001",
    history: { user: "Hi, I'm Sanskar", chat: "Hi, I'm Anil" },
}

const chat2: Chat = {
    chatName: "Himal",
    chatType: "Private",
    chatId: "002",
    history: { user: "Hey, I'm Sanskar", chat: "Hi, I'm Himal" },
}

const chat3: Chat = {
    chatName: "Rojisha",
    chatType: "private",
    chatId: "003",
    history: { user: "Hey, I'm Sanskar", chat: "Hello, I'm Rojisha" },
}

const chatData: ChatData = {
    chatList: [chat1, chat2, chat3]
}

export default chatData
