import React from "react";
export const MessageList = ({ messageList }) => {
    return (
        <div className="message-list">
            {messageList.map((el) => {
                return <div key={el.id} className="">
                    <p><span>{el.chatAuthor}:</span> {el.chatText}</p>
                </div>
            })}
        </div>
    );
};