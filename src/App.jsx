import { useEffect, useState } from 'react';
import './App.css';
import Message from "./Message.js";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { Profile } from './screen/Profile/Profile';
import { Main } from './screen/Main/Main';
import { Chats } from './screen/Chats/Chats';
import { Menu } from './components/Menu/Menu';
import { NotFound } from './screen/NotFound/NotFound';
import { Provider } from 'react-redux';
import { store } from "./Store/index"


function App() {
  const text = "Chat App"

  const chatList = [{ chatName: "User1", id: "1" }, { chatName: "User2", id: "2" }];

  const [messageList, setMessadeList] = useState([]);
  const changeMessageList = (newMessage) => { setMessadeList([...messageList, newMessage]) }

  useEffect(() => {
    if (messageList.length !== 0) {
      const timer = setTimeout(() => {
        console.log('сообщение от ' + messageList[messageList.length - 1].chatAuthor + ' отправленно')
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [messageList])

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Menu />

            <main>
              <Switch>

                <Route exact path="/chats">
                  <Message text={text} />
                  <Chats chatList={chatList} messageList={messageList} changeMessageList={changeMessageList} />
                </Route>

                <Route path="/chats/:chatId">
                  <Message text="chatId" />
                  <Chats chatList={chatList} messageList={messageList} changeMessageList={changeMessageList} />
                </Route>

                <Profile />
                <Main />
                <NotFound />
           


              </Switch>
            </main>

          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;