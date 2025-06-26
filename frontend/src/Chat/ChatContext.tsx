import React from "react";
interface ChatContext {
    swap: () => void;
}
export default React.createContext<ChatContext>({} as ChatContext);
