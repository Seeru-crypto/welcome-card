'use client'
import styles from "./musicPlayer.module.css"
import {SpotifyPlayer} from './spotifyPlayer.js';
export interface MusicPlayerProps {

}
const MusicPlayer = (props : MusicPlayerProps) => {
    // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

    const accessToken = 'BQB3c9vlHX5hx0MpJdaLaZZNjV5Hld263uj6UPQpftVVhRjqZGHkXss0ugkYIRQdwnjA7EckSMYFrVrXTkkhWKMdeUVQDe4EOgjKMoVlmewxp6M68nqTq62NQOXne-COWmBlVr32gTOq83Qq6DMsQ8BHwo9kcvu7Z4QgSA_Blm2eKfCGXXL95zedgfyzdP1a6LvhhEndcQ'

    const playlistId = '3EFbAZ8Vy2mrnPwGOG8jat';

    return (
        <div className={styles.container}>
            <p>Music Player</p>

            <iframe src="https://open.spotify.com/embed/track/7vdoCxLFSPvE8OfcUr9L1O?utm_source=generator" width="100%"
                    height="352" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
        </div>
    )
}

export default MusicPlayer;