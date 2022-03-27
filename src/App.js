import logo from './logo.svg';
import './App.css';
import data from "./data.js";
import Track from "./components/Track";

function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  return (
      <div className="container">
      <h1>My Playlist</h1>
      <div class="cardPlaylist">
        <img src={data.album.images[0].url} alt="ImagePlaylist" />
        <h3>{data.album.name}</h3>
        <p>{data.album.artists[0].name}</p>
        <button class="btnSelect">Select</button>
      </div>
      <Track
        url={data.album.images[0].url}
        title={data.album.name}
        artist={data.album.artists[0].name}
      />
    </div>
  );
}

export default App;
