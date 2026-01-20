import { useState } from 'react';
import './App.css'
import { mockTracks } from './mockData.js';

export default function App(){

  const [searchResults, setSearchResults] = useState(mockTracks);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // We'll implement these functions in the next step
  const addTrack = (track) => {
    console.log('Adding track:', track.name);
    // TODO: Add logic here
  };

  const removeTrack = (track) => {
    console.log('Removing track:', track.name);
    // TODO: Add logic here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Jammming</h1>
        <p className="app-subtitle">Create Spotify Playlists</p>
      </header>
      
      <main className="main-container">
        <div className="app-layout">
          <div className="search-section">
            <h2>Search Section</h2>
            <p>This is where SearchBar and SearchResults will go</p>
          </div>

          <div className="playlist-section">
            <h2>Playlist Section</h2>
            <p>This is where Playlist will go</p>
          </div>
        </div>
      </main>
    </div>
  );

}
