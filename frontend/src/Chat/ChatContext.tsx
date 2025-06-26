import React from "react";
interface ChatContext {
    swap: () => void;
    chatData: {}
}
export default React.createContext<ChatContext>({} as ChatContext);
