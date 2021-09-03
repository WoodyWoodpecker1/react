import { useEffect, useState } from 'react';
import './App.css';
import Message from "./Message.js";
import ChatForm from "./components/chatForm/ChatForm.js";
import { MessageList } from './components/message-list/MessageList';
import ChatList from './components/ChatList/ChatList';
// import idGenerator from "./components/idGenerator";


function App() {

  const chatList = [{ chatName: "Andrew", id: "idGenerator()" }, { chatName: "John", id: "idGenerator()" }];

  const [messageList, setMessadeList] = useState([]);
  const changeMessageList = (newMessage) => { setMessadeList([...messageList, newMessage]) }

  useEffect(() => {
    if (messageList.length !== 0) {
      const timer = setTimeout(() => {
        console.log('Message from ' + messageList[messageList.length - 1].chatAuthor + ' was sent')
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [messageList])

  return (
    <div className="App">
      <header className="App-header">
        <Message text={text} />
        <div className="wrapper">
          <ChatList chatList={chatList} />
          <MessageList messageList={messageList} />
          <ChatForm changeMessageList={changeMessageList} />
        </div>
      </header>
    </div>
  );
}

export default App;