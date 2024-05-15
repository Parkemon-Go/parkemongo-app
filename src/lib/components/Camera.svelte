<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    let videoElement: HTMLVideoElement;

    async function startCamera() {
        try {
            // Try to get the back camera
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: { exact: 'environment' } } 
            });
            videoElement.srcObject = stream;
        } catch (error) {
            console.warn('Back camera not found, trying front camera', error);
            try {
                // Fallback to the front camera if back camera is not available
                const stream = await navigator.mediaDevices.getUserMedia({ 
                    video: { facingMode: 'user' } 
                });
                videoElement.srcObject = stream;
            } catch (error) {
                console.error('Error accessing camera: ', error);
            }
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
        height: 100%;
    }

    video {
        max-width: 100%;
        height: 100%;
        border: 2px solid black;
    }
</style>

<div class="video-container">
    <video bind:this={videoElement} autoplay></video>
</div>
