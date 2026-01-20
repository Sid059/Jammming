import styles from './tracklist.module.css';

export default function TracklistUI({ children }) {
    return (
        <div className={styles.tracklist}>
            {children}
        </div>
    )
}
