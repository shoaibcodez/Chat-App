import Messages from "./Messages";
import { Input } from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span style={{ fontWeight: 700 }}>
                    {data.user?.displayName}
                </span>
            </div>
            <Messages />
            <Input />
        </div>
    );
};
