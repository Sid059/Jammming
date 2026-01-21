import styles from './searchBar.module.css';

export default function SearchBarUI({ searchTerm, onSearchTermChange, onSearch }){

    function handleSubmit(event){
        event.preventDefault();

        if(onSearch) {
            onSearch(searchTerm);
        }
    }

    // Handle Enter key press in input field
    function handleKeyPress({ key, shiftKey }) {
        if(key === 'Enter' && !shiftKey ) {
            handleSubmit(event);
        }
    }

    return (
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            
        </form>
    )
}