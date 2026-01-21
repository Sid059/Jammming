import { useState } from 'react';
import Tracklist from './Tracklist.jsx';
import PlaylistUI from '../presentational/PlaylistUI.jsx';

export default function Playlist({ playlistName, playlistTracks, onNameChange, onRemove }) {
  // Local state for save functionality
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Handle save to Spotify
  function handleSaveToSpotify() {
    console.log('Saving playlist to Spotify...');

    // Empty Playlist validation
    if (playlistTracks.length === 0) {
      alert('Your playlist is empty! Add some tracks first.');
      return;
    }

    // Name validation
    if (!playlistName.trim()) {
      alert('Please give your playlist a name!');
      return;
    }

    // Show saving state
    setIsSaving(true);
    setSaveMessage(`Creating playlist "${playlistName}"...`);

     // Prepare data for Spotify API
    const trackUris = playlistTracks.map(track => track.uri);
    const playlistData = {
      name: playlistName,
      description: 'Created with Jammming',
      tracks: trackUris,
      trackCount: playlistTracks.length
    };

    console.log('Playlist data ready for Spotify:', playlistData);

        // Simulate API call delay
    setTimeout(() => {
      // This is where we'll call the real Spotify API in Step 11
      console.log('Playlist saved successfully!', playlistData);
      
      // Show success message
      setSaveMessage(`Playlist "${playlistName}" saved to Spotify with ${playlistTracks.length} tracks!`);
      
      // Reset saving state after delay
      setTimeout(() => {
        setIsSaving(false);
        setSaveMessage('');
        
        // Optional: Reset playlist after save
        // This is common UX - user starts fresh with new playlist
        // We'll implement this later based on user preference
      }, 3000);
      
    }, 2000); // 2 second delay to simulate API call
  };

  // Calculate approximate playlist duration
  // Assuming average song length of 3.5 minutes
  function calculateDuration() {
    const avgSongMinutes = 3.5;
    const totalMinutes = playlistTracks.length * avgSongMinutes;
    
    if(totalMinutes < 60) {
      return `${Math.round(totalMinutes)} min`;
    }
    else {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = Math.round(totalMinutes % 60);
      return `${hours} hr ${minutes}`
    }
  }

  return (
    <PlaylistUI
      playlistName={playlistName}
      onNameChange={onNameChange}
      onSave={handleSaveToSpotify}
      trackCount={playlistTracks.length}
      isSaving={isSaving}
    >
      {/* Tracklist component as children */}
      <Tracklist 
        tracks={playlistTracks}
        onRemove={onRemove}
        isRemoval={true}
      />
      
      {/* Show save message */}
      {saveMessage && (
        <div className="save-message">
          {saveMessage}
        </div>
      )}
    </PlaylistUI>
  );
}