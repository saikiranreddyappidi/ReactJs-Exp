// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const devName = `Sai Kiran`

function App(prop) {
    const [username, setUsername] = useState('');

    // const Change=(e)=>{
    //     setUsername(e.target.value);
    // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello, {username ? username : 'World'}!
        </h1>
          <main>
            <input className="NameInput" type="text" value={username} placeholder={'Enter your name!'} onChange={e => setUsername(e.target.value)} />
        </main>
      </header>
    </div>
  );
}

export default App;
