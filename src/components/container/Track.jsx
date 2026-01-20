import { useState } from 'react';
import TrackUI from '../presentational/TrackUI.jsx';

export default function Track({ track, onAdd, onRemove, isRemoval }) {

    function handleAdd() {
        if(onAdd && track) {
            onAdd(track);
        }
    }

    function handleRemove() {
        if(onRemove && track) {
            onRemove(track);
        }
    }

    return (
        <TrackUI 
        track={track}
        onAdd={handleAdd}
        onRemove={handleRemove}
        isRemoval={isRemoval}
        />
    );
}