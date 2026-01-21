import { useState } from 'react';
import './App.css'
import { mockTracks } from './mockData.js';
import SearchBar from './components/container/SearchBar.jsx';
import Tracklist from './components/container/Tracklist.jsx';
import Playlist from './components/container/Playlist.jsx'; //=======NEW========

export default function App(){

  const [searchResults, setSearchResults] = useState(mockTracks);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

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


   // ============ search function ============
  function handleSearch(searchTerm) {
    //console.log('Searching for:', searchTerm);
    
    // Show loading state
    setIsSearching(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Filter mock data based on search
      const filteredTracks = mockTracks.filter(track => 
        track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        track.album.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setSearchResults(filteredTracks);
      setIsSearching(false);
      
      //console.log(`Found ${filteredTracks.length} tracks`);
    }, 800); // Longer delay to see loading animation
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1 className="app-title">Jammming</h1>
        <p className="app-subtitle">Create Spotify Playlists</p>
      </header> */}
      <header className="App-header">
      {/* Add your icon next to the title */}
        <div className="header-content">
          <img 
            src="/images/music-playlist.png" // or spotify.png
            alt="Jammming Logo" 
            className="app-logo"
          />
          <div className="header-text">
            <h1 className="app-title">Jammming</h1>
            <p className="app-subtitle">Create Spotify Playlists</p>
          </div>
        </div>
      </header>
      
      <main className="main-container">

         {/* Search Bar with loading state */}
        <div className="search-bar-container">
          <SearchBar 
            onSearch={handleSearch}
            isLoading={isSearching}
          />
        </div>

        {/* Stats Display - Shows track counts */}
        <div className="stats-display">
          <div className="stat-item">
            <span className="stat-label">Search Results:</span>
            <span className="stat-value">
              {searchResults.length} {searchResults.length === 1 ? 'track' : 'tracks'}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Playlist:</span>
            <span className="stat-value">
              {playlistTracks.length} {playlistTracks.length === 1 ? 'track' : 'tracks'}
            </span>
          </div>
        </div>

        <div className="app-layout">
          {/* Search Results Section */}
          <div className="search-section">
            <h2 className="section-title">
              Search Results
              {isSearching && <span className="searching-indicator"> (Searching...)</span>}
            </h2>
            <Tracklist 
              tracks={searchResults}
              onAdd={addTrack}
              // These are search results, so show + buttons
              isRemoval={false}
            />
          </div>

          {/* Playlist Section */}
          <div className="playlist-section">
            <Playlist 
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onNameChange={updatePlaylistName}
              onRemove={removeTrack}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
