import { useState } from 'react';
import './App.css'
import { mockTracks } from './mockData.js';

export default function App(){

  const [searchResults, setSearchResults] = useState(mockTracks);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">Jammming</h1>
        <p className="app-subtitle">Create Spotify Playlists</p>
      </header>

      <main>
        <div>
          <p>Search Results: {searchResults.length}</p>
          <p>Playlist: {playlistName} has {playlistTracks.length} tracks</p>
        </div>
      </main>
    </div>
  )
}
