import React from "react";
import type { ChatData } from "./chatData"
import { Socket } from "socket.io-client"

interface ChatContext {
    swap: () => void;
    chatData: ChatData;
    setCurrentChat: (chatId: string, chatName: string) => void
    getCurrentChat: () => ({ chatId: string, chatName: string, isOnline: boolean })
    forceUpdateChat: () => void
    getSocket: () => Socket
}

export default React.createContext<ChatContext>({} as ChatContext);
