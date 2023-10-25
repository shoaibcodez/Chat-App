import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    const given_seconds = message.date.seconds + 19800;
    const dateObj = new Date(given_seconds * 1000);
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    // const seconds = dateObj.getSeconds();

    const timeString =
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0");
    // +":" +seconds.toString().padStart(2, "0");

    return (
        <div
            ref={ref}
            className={`message ${
                message.senderId === currentUser.uid && "sender"
            }`}
        >
            <div className="messageInfo">
                <img
                    src={
                        message.senderId === currentUser.uid
                            ? currentUser.photoURL
                            : data.user.photoURL
                    }
                    alt=""
                />
                <span>{timeString}</span>
            </div>
            <div className="messageContent">
                <p>{message.text}</p>
                {message.img && (
                    <img
                        src={message.img}
                        alt=""
                    />
                )}
            </div>
        </div>
    );
};
export default Message;
