/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import Track from '../../components/Track';
import SearchBar from '../../components/Searchbar';
import FormPlaylist from '../../components/FormPlaylist';
import NavigationBar from '../../components/NavigationBar';

export default function CreatePlaylist() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrackURI, setSelectedTrackURI] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (!isSearch) {
      const selectedTracks = filterSelectedTracks();

      setTracks(selectedTracks);
    }
  }, [selectedTrackURI]);

  const filterSelectedTracks = () => {
    tracks.filter((track) => selectedTrackURI.includes(track.uri));
  };

  const handleSuccessSearch = (searchTracks) => {
    setIsSearch(true);

    const selectedSearchTracks = searchTracks.filter((data) =>
      selectedTrackURI.includes(data.uri)
    );

    setTracks([...new Set([...selectedSearchTracks, ...searchTracks])]);
  };

  const clearSearch = () => {
    setTracks(selectedTracks);
    setIsSearch(false);
  };

  const toggleSelect = (track) => {
    const { uri } = track;

    if (selectedTrackURI.includes(uri)) {
      setSelectedTrackURI(selectedTrackURI.filter((item) => item !== uri));
      setSelectedTracks(selectedTrackURI.filter((item) => item.uri !== uri));
    } else {
      setSelectedTrackURI([...selectedTrackURI, uri]);
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  return (
    <>
      <NavigationBar />
      <FormPlaylist uris={selectedTrackURI} />

      <hr />
      <SearchBar 
        onSuccess={(tracks) => handleSuccessSearch(tracks)} 
        onClearSearch={clearSearch} 
      /> 


      <div className="track-list"> 
        {tracks?tracks.map((track) => ( //eslint-disable-line
          <Track
            key={track.id}
            url={track.album.images[0].url} 
            title={track.name}
            artist={track.artists[0].name}
            select={selectedTrackURI.includes(track.uri)}
            toggle={() => toggleSelect(track)}
          /> 
        )):<p>No Tracks</p>}
      </div>
    </>
  );
}