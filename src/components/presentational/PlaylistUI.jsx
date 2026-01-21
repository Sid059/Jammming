import styles from './playlist.module.css';

// What props does PlaylistUI need?
// 1. playlistName: Current name of the playlist
// 2. onNameChange: Function to call when playlist name changes
// 3. onSave: Function to call when Save to Spotify is clicked
// 4. trackCount: Number of tracks in playlist (for display)
// 5. children: The Tracklist component will be passed as children

export default function PlaylistUI({ playlistName, onNameChange, onSave, trackCount, children, isSaving = false }) {
  
  // Handle input change - using your preferred pattern
  function handleNameChange(event) {
    if (onNameChange) {
      onNameChange(event);
    }
  }

  // Handle save button click
  function handleSave() {
    if(onSave && !isSaving) {
      onSave();
    }
  }

  return (
    <div className={styles.playlist}>
      {/* Playlist Header */}
      <div className={styles.playlistHeader}>
        <h2 className={styles.sectionTitle}>Playlist:</h2>
        <div className={styles.nameInputWrapper}>
          <input
            type="text"
            value={playlistName}
            onChange={handleNameChange}
            className={styles.playlistNameInput}
            placeholder="Enter playlist name"
            maxLength={50}
            disabled={isSaving}
          />
          <div className={styles.charCounter}>
            {playlistName.length}/50
          </div>
        </div>
      </div>

      {/* Tracklist passed as children */}
      <div className={styles.tracklistContainer}>
        {children}
      </div>

      {/* Save Button and Stats */}
      <div className={styles.playlistFooter}>
        <div className={styles.playlistStats}>
          <span className={styles.trackCount}>
            {trackCount} {trackCount === 1 ? 'track' : 'tracks'}
          </span>

          <span className={styles.playlistDuration}>
            {/* We'll add duration calculation later */}
            ~{Math.round(trackCount * 3.5)} min
          </span>
        </div>

        <button
          className={styles.saveButton}
          onClick={handleSave}
          disabled={trackCount === 0 || isSaving}
          aria-label={isSaving ? "Saving to Spotify..." : "Save to Spotify"}
        >
          {isSaving ? (
            <>
              <div className={styles.spinner}></div>
              Saving...
            </>
          ) : (
            <>
            {/* this needs modifitcation with poroepr icons */}
              <img 
                src="/images/saveIcon.png" 
                alt="Save" 
                className={styles.saveIcon}
              />
              Save to Spotify
            </>
          )}
        </button>

        {/* Save Status Message */}
        {isSaving && (
          <div className={styles.saveStatus}>
            <p>Creating playlist "{playlistName}" with {trackCount} tracks...</p>
          </div>
        )}
      </div>
    </div>
  );
}
