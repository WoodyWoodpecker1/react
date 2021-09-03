import React from "react";
import idGenerator from "../idGenerator";
export const MessageList = ({ messageList }) => {
    return (
        <div className="message-list">
            {messageList.map((el, i) => {
                return <div key={idGenerator()} className="">
                    <p><span>{el.chatAuthor}:</span> {el.chatText}</p>
                </div>
            })}
        </div>
    );
};