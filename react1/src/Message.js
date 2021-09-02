import './Message.css';

function Message(props) {
    return (
        <div className="msg_text">
            {props.msg}
        </div>
    );
}

export default Message;