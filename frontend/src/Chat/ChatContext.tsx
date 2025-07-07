import React from "react";
import type { ChatData } from "./chatData"
interface ChatContext {
    swap: () => void;
    chatData: ChatData;
    setCurrentChat: (chatId: string, chatName: string) => void
    getCurrentChat: () => ({ chatId: string, chatName: string })
    forceUpdateChat: () => void
}
export default React.createContext<ChatContext>({} as ChatContext);
