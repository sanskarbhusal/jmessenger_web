import React from "react";
import type { ChatData } from "./chatData"
interface ChatContext {
    swap: () => void;
    chatData: ChatData;
    update: () => void
}
export default React.createContext<ChatContext>({} as ChatContext);
