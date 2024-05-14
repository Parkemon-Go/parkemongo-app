<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import { writable } from 'svelte/store';

    let map: any;
    let marker: any;
    let mapElement: any;

    // Create a writable store to hold the position data
    let position = writable({ latitude: null, longitude: null });

    function updatePosition({ coords }) {
        position.set({
            latitude: coords.latitude,
            longitude: coords.longitude
        });

        if (marker) {
            marker.setLatLng([coords.latitude, coords.longitude]);
            map.setView([coords.latitude, coords.longitude], 13);
        }
    }

    function handleError(error) {
        console.error('Error getting geolocation: ', error);
    }

    onMount(() => {
        map = L.map(mapElement).setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        marker = L.marker([51.505, -0.09]).addTo(map)
            .bindPopup('Deine Position')
            .openPopup();

        if (navigator.geolocation) {
            const watchId = navigator.geolocation.watchPosition(updatePosition, handleError);

            return () => {
                navigator.geolocation.clearWatch(watchId);
            };
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    });
</script>

<style>
    #map {
        height: 100vh;
        width: 100%;
    }
</style>

<div id="map" bind:this={mapElement}></div>
