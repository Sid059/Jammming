import styles from './searchBar.module.css';

export default function SearchBarUI({ searchTerm, onSearchTermChange, onSearch, isLoading }){

    function handleSubmit(event){
        event.preventDefault();

        if(onSearch) {
            onSearch(searchTerm);
        }
    }

    // Handle Enter key press in input field
    function handleKeyPress(event) {    //will receive an event object so it can be passed to handleSubmitS
        const { key, shiftKey } = event;
        if(key === 'Enter' && !shiftKey ) {
            handleSubmit(event);
        }
    }

    return (
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <div className={styles.searchInputWrapper}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search for songs, artists, or albums..."
                    value={searchTerm}
                    onChange={onSearchTermChange}
                    onKeyDown={handleKeyPress}
                    aria-label="Search for music"
                />

                <button 
                    type="submit" 
                    className={styles.searchButton}
                    disabled={isLoading}
                    aria-label={isLoading ? "Searching..." : "Search"}
                >
                    <img 
                        src="/images/searchIcon.png" 
                        alt="Search" 
                        className={styles.searchIcon}
                    />
                    <span className={styles.buttonText}>
                        {isLoading ? "Searching..." : "Search"}
                    </span>
                </button>
            </div>

            {/* <div className={styles.searchTips}>
                <small>Try searching for artists, songs, or albums</small>
            </div> */}

            {isLoading && (
                <div className={styles.loadingIndicator}>
                    <div className={styles.spinner}></div>
                    <span>Searching Spotify...</span>
                </div>
            )}
        </form>
    );
}