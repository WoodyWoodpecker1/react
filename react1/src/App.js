import './App.css';
import Message from './Message';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Message msg = {props.msg}/>
      </header>
    </div>
  );
}

export default App;
