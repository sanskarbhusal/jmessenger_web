import React from "react";
interface chatContext {
    swap: () => void;
    setChatName: () => void;
    setChatId: () => void;
    getChatName: () => string;
    getChatId: () => string;

}
export default React.createContext<chatContext>({} as chatContext);
