import Track from '../container/Track.jsx';
import TracklistUI from '../presentational/TracklistUI.jsx';

export default function Tracklist({ tracks, onAdd, onRemove, isRemoval }) {
    //Object literal style for empty playlist / search list created here since it's simple and specific to this component
    const emptyMessageStyle = {
        padding: '40px 20px',
        textAlign: 'center',
        color: '#b3b3b3',
        fontStyle: 'italic',
        backgroundColor: '#181818',
        borderRadius: '8px',
        marginTop: '10px'
    }

    return (
        <TracklistUI>
            { tracks.map( track => (
                <Track
                key={track.id}
                track={track}
                onAdd={onAdd}
                onRemove={onRemove}
                isRemoval={isRemoval}
                />
            ))}

            {tracks.length === 0 && (
                //Inline style applied for the empty message
                <div style={emptyMessageStyle}>
                    { isRemoval ? 'No tracks in your playlist. Add some!' : 'No search results. Try searching for something else.' }
                </div>
            )}
        </TracklistUI>
    )
}