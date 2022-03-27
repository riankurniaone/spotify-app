import logo from './logo.svg';
import './App.css';
import data from "./data.js";
import Track from "./components/Track";

function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY;

  const trackList = data.map((track) => (
    <Track
      key={track.id}
      url={track.album.images[0].url}
      title={track.name}
      artist={track.artists[0].name}
    />
  ));

  return (
      <div className="container">
      <h1>Playlist Spotify</h1>
      <div className="trackList">{trackList}</div>
    </div>
  );
}

export default App;
