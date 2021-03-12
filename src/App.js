import logo from './logo.svg';
import './App.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';

function App() {
  const [thumbLike, setThumbLike] = useState('');

  const handleClick = () =>{
    setThumbLike( thumbLike ? '' : '#3498DB' );
  }

  const thumbUpStyle = {
        fontSize:'100px',
        color:`${thumbLike}`,
  }

  return (
    <div className="App">
      <header className="App-header">

        <ThumbUpIcon style = {thumbUpStyle} onClick={handleClick}></ThumbUpIcon>

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
