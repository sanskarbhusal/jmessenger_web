type ChatData = {
    payload: Contact[]
}
const chatData: ChatData = {
    payload: [] as Contact[]
}
type Contact = {
    chatName?: string
    chatId?: string
    chatType?: string
    setChatName?: () => void;
    setChatId?: () => void;
    setChatType?: () => void;
    getChatName?: () => string;
    getChatId?: () => string;
    getChatType?: () => string
}
const contact: Contact = {
    chatName: "Person1",
    chatId: "Person1",
    chatType: "Person1",

    setChatName: () => { },
    setChatId: () => { },
    setChatType: () => { },
    getChatName: () => { return "" },
    getChatId: () => { return "" },
    getChatType: () => { return "" },
}
export { contact }
export default chatData
