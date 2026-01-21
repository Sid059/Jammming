import { useState } from 'react';
import SearchBarUI from '../presentational/SearchBarUI.jsx';

export default function SearchBar({ onSearch, isLoading = false }) {

    const [searchTerm, setSearchTerm] = useState('');

    function handleSearch(term) {
        // Only search if we have a non-empty term
        if (onSearch && term.trim()) {
            onSearch(term.trim());
        }
    }

    function handleSearchTermChange({ target }) {
        setSearchTerm(target.value);
    }

    return (
        <SearchBarUI
            searchTerm={searchTerm}
            onSearchTermChange={handleSearchTermChange}
            onSearch={handleSearch}
            isLoading={isLoading}
        />
    )
}