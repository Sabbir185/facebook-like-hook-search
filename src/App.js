import logo from './logo.svg';
import './App.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useEffect, useState } from 'react';

function App() {
  const [thumbLike, setThumbLike] = useState('');
  const [randomUser, setRandomUser] = useState({}); // one object want to use

  useEffect(()=>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  },[]);

  return (
    <div className="App">
      <header className="App-header">

        <ThumbUpIcon onClick={() => setThumbLike( thumbLike ? '' : '#3498DB')} style={{color:`${thumbLike}`, fontSize:'70px'}} ></ThumbUpIcon>

        {/* data load from nested  */}
        <h2>Name : {randomUser.name && randomUser.name.first}</h2>


        {/* search meal , call api */}
        
        
      </header>
    </div>
  );
}

export default App;
