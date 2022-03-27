import logo from './logo.svg';
import './App.css';
import data from "./data.js";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
      <h1>My Playlist</h1>
      <div class="cardPlaylist">
        <img src={data.album.images[0].url} alt="ImagePlaylist" />
        <h3>{data.album.name}</h3>
        <p>{data.album.artists[0].name}</p>
        <button class="btnSelect">Select</button>
      </div>
    </div>
    </div>
  );
}

export default App;
