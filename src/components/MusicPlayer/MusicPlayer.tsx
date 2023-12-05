'use client'
import styles from "./musicPlayer.module.css"
import React from 'react';
import Script from "next/script";
import { WebPlaybackInstance, Player } from 'spotify-api';

export interface MusicPlayerProps {

}
interface WindowWithSpotifyReady extends Window {
    onSpotifyWebPlaybackSDKReady?: () => void;
}
const MusicPlayer = (props : MusicPlayerProps) => {
    // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

    const accessToken = 'BQB3c9vlHX5hx0MpJdaLaZZNjV5Hld263uj6UPQpftVVhRjqZGHkXss0ugkYIRQdwnjA7EckSMYFrVrXTkkhWKMdeUVQDe4EOgjKMoVlmewxp6M68nqTq62NQOXne-COWmBlVr32gTOq83Qq6DMsQ8BHwo9kcvu7Z4QgSA_Blm2eKfCGXXL95zedgfyzdP1a6LvhhEndcQ'

    const SpotifyPlayer = () => {
        const token = 'YOUR_SPOTIFY_TOKEN'; // Replace with your Spotify token

        const handleScriptLoad = () => {
            // Initialize Spotify Web Playback SDK here
            const windowWithSpotifyReady = window as WindowWithSpotifyReady;
            windowWithSpotifyReady.onSpotifyWebPlaybackSDKReady = () => {
                const player = new Spotify.Player({
                    name: 'Web Playback SDK Quick Start Player',
                    getOAuthToken: (cb) => {
                        cb(token);
                    },
                    volume: 0.5,
                });

                // Rest of your event listeners and code

                player.connect();
            };
        };

    return (
        <div className={styles.container}>
            <p>Music Player</p>4
            <Script
                src="https://sdk.scdn.co/spotify-player.js"
                onLoad={handleScriptLoad}
            />

            <iframe src="https://open.spotify.com/embed/track/7vdoCxLFSPvE8OfcUr9L1O?utm_source=generator" width="100%"
                    height="352" frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
        </div>
    )
}
}

export default MusicPlayer;