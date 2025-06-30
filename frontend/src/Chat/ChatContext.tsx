import React from "react";
import type { ChatData } from "./chatData"
interface ChatContext {
    swap: () => void;
    chatData: ChatData;
}
export default React.createContext<ChatContext>({} as ChatContext);
