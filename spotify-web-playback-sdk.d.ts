// spotify-web-playback-sdk.d.ts

// Define the Spotify type
declare global {
    interface Window {
        Spotify: {
            Player: any; // Use any if you can't find specific types
        };
    }
}

// Define any additional types you might need
// For example, Player type, Event types, etc.
