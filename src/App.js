// import logo from './logo.svg';
// import './App.css';
// import data from "./data.js";
// import Track from "./components/Track";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CreatePlaylist from "./pages/CreatePlaylist";
import Login from "./pages/Login";
// function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY;

//   const trackList = data.map((track) => (
//     <Track
//       key={track.id}
//       url={track.album.images[0].url}
//       title={track.name}
//       artist={track.artists[0].name}
//     />
//   ));

//   return (
//       <div className="container">
//       <h1>Playlist Spotify</h1>
//       <div className="trackList">{trackList}</div>
//     </div>
//   );
// }

function App() {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  return (
    <Router>
      <Switch>
        <Route path="/create-playlist" exact>
          {isAuthorized ? <CreatePlaylist /> : <Redirect to="/" />}
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
