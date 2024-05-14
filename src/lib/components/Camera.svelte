<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    let videoElement: any;

    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoElement.srcObject = stream;
        } catch (error) {
            console.error('Error accessing camera: ', error);
        }
    }

    function stopCamera() {
        const stream = videoElement.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
        videoElement.srcObject = null;
    }

    onMount(() => {
        startCamera();

        return () => {
            stopCamera();
        };
    });
</script>

<style>
    .video-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    video {
        max-width: 100%;
        height: auto;
        border: 2px solid black;
    }
</style>

<div class="video-container">
    <video bind:this={videoElement} autoplay></video>
</div>
