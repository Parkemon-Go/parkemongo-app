<script>
    import Camera from "$lib/components/Camera.svelte";
    import { Button } from "flowbite-svelte";
</script>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto my-5">
    <Camera></Camera>
    <img class="mt-4 rounded-t-lg w-full" src="/img/route.jpg" alt="Route Bild" />
    <div class="flex justify-center mt-4">
        <Button>Route beenden</Button>
    </div>
</div>
