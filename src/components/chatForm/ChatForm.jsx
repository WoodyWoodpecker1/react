import { useEffect, useRef, useState } from "react";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { userNameSelector } from "../../Store/Profile/selectors";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const ChatForm = (props) => {
    const ref = useRef(null);

    const userName = useSelector(userNameSelector);

    const [chatMessage, setChatMessage] = useState({ chatAuthor: '', chatText: '', id: '' });

    const handleChangeAuthor = (e) => { setChatMessage({ ...chatMessage, chatAuthor: e.target.value }) };

    const handleChangeMessage = (e) => { setChatMessage({ ...chatMessage, chatText: e.target.value, }) };

    const handleSubmit = () => {
        props.changeMessageList(chatMessage);
        setChatMessage({ chatAuthor: userName, chatText: '' });
        ref.current?.focus();
    };
    useEffect(() => {
        chatMessage.chatAuthor = userName;
        ref.current?.focus();

    });

    const classes = useStyles();
    return (
        <div className="message-form">
            <div>
                <TextField disabled id="outlined-basic" margin="dense" label="Автор" variant="outlined" className="message-form__autor" onChange={handleChangeAuthor} value={chatMessage.chatAuthor} />
            </div>
            <div className="message-form__msg-send">
                <TextField id="outlined-basic" inputRef={ref} margin="dense" maxRows="1.5" multiline label="Сообщение" variant="outlined" className="message-form__msg-send_textarea" onChange={handleChangeMessage} value={chatMessage.chatText} />
                <div className="message-form__msg-send-btn">
                    <Button
                        variant="outlined"
                        color="default"
                        className={classes.button}
                        onClick={handleSubmit}>Отправить
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default ChatForm;