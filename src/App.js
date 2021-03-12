import logo from './logo.svg';
import './App.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';

function App() {
  const [thumbLike, setThumbLike] = useState('');

  return (
    <div className="App">
      <header className="App-header">

        <ThumbUpIcon onClick={() => setThumbLike( thumbLike ? '' : '#3498DB')} style={{color:`${thumbLike}`, fontSize:'70px'}} ></ThumbUpIcon>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
