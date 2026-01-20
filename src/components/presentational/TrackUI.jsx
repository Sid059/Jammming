import styles from './track.module.css';

export default function TrackUI({ track, onAdd, onRemove, isRemoval }){

    function renderAction() {
        if (isRemoval) {
            return (
                <button className={styles.trackAction}
                onClick={onRemove}
                aria-label={`Remove ${track.name} from playlist`}
                >
                -
                </button>
            );
        }
        else {
            return (
                <button className={styles.trackAction}
                onClick={onAdd}
                aria-label={`Add ${track.name} to playlist`}
                >
                    +
                </button>
            );
        }
    }

    return (
        <div className={styles.track}>
            {/* Left side: Track information */}
            <div className={styles.trackInfo}>
                <h3 className={styles.trackName}>{track.name}</h3>
                <p className={styles.trackDetails}>
                    {track.artist} • {track.album}
                </p>
            </div>
            {/* Right side: Action button (+ or -) */}
            {renderAction()}
        </div>
    );

}