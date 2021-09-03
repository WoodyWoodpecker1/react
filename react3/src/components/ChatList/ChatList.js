// import idGenerator from "../idGenerator";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: blueGrey,
    },
}));



const ChatList = ({ chatList }) => {
    const classes = useStyles();

    return (

        <div className="chat-list">
            {chatList.map((el, i) => {
                return <List component="nav" className={classes.root} aria-label="contacts">
                    <ListItem button>
                        <ListItemText inset primary={el.chatName} />
                    </ListItem>
                </List>
            })}
        </div>)
};



export default ChatList