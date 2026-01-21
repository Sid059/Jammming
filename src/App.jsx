import { useState } from 'react';
import './App.css'
import { mockTracks } from './mockData.js';
import Tracklist from './components/container/Tracklist.jsx';

export default function App(){

  const [searchResults, setSearchResults] = useState(mockTracks);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  //========== add track to playlist ==========
  function addTrack(trackToAdd) {
    //check if track already exists in playlist using track id as its unique
    const isTrackInPlaylist = playlistTracks.some( playlistTrack => playlistTrack.id === trackToAdd.id );
    
    if(isTrackInPlaylist) {
      return; // Exit the function if the track is already in the playlist
    }
    else {
      setPlaylistTracks( prevTracks => [...prevTracks, trackToAdd] );
    }
    
  }
  
  // ========= remove track from playlist =========
  function removeTrack(trackToRemove) {
    //keep all tracks except the one with matching id
    setPlaylistTracks( prevTracks => (
      prevTracks.filter( playlistTrack => playlistTrack.id !== trackToRemove.id ) 
    ));
  }

  // ========= update playlist name =========
  // This function will handle playlist name changes
  function updatePlaylistName({ target }) {
    setPlaylistName( target.value );
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Jammming</h1>
        <p className="app-subtitle">Create Spotify Playlists</p>
      </header>
      
      <main className="main-container">
        {/* Stats Display - Shows track counts */}
        <div className="stats-display">
          <div className="stat-item">
            <span className="stat-label">Search Results:</span>
            <span className="stat-value">{searchResults.length} tracks</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Playlist:</span>
            <span className="stat-value">{playlistTracks.length} tracks</span>
          </div>
        </div>

        <div className="app-layout">
          {/* Search Results Section */}
          <div className="search-section">
            <h2 className="section-title">Search Results</h2>
            <Tracklist 
              tracks={searchResults}
              onAdd={addTrack}
              // These are search results, so show + buttons
              isRemoval={false}
            />
          </div>

          <div className="playlist-section">
            {/* Playlist Header with Editable Name */}
            <div className="playlist-header">
              <h2 className="section-title">Playlist:</h2>
              <div className="name-input-wrapper">
                <input
                  type="text"
                  value={playlistName}
                  onChange={updatePlaylistName}
                  className="playlist-name-input"
                  placeholder="Enter playlist name"
                  maxLength={50}
                />
                
                <div className="char-counter">
                  {playlistName.length}/50
                </div>
              </div>
            </div>
            
            <Tracklist 
              tracks={playlistTracks}
              onRemove={removeTrack}
              isRemoval={true}
            />
          </div>
        </div>
      </main>
    </div>
  );

}
