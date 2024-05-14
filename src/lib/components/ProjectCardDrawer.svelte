<script>
    import {fade, fly, slide} from "svelte/transition";
    import {Button, CloseButton} from "flowbite-svelte";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    let drawerOpen;
    export let transitionParams;
</script>

<div in:fly={transitionParams}  class="relative top-[200px] text-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto my-5">
    <div class="relative">
        <Button class="" color="dark" on:click={() => dispatch('change', {drawerOpen:!drawerOpen})}></Button>
        <img class="rounded-t-lg w-full" src="/img/route.jpg" alt="Route Bild" />
    </div>

    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Südstadt Nürnberg</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Länge der Route: 2,6 km</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Dauer der Route: 36 min</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Type der Route: einfache Strecke</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Punkte für die abgelaufene Strecke: 2600</p>
    </div>
    <Button class="mb-5" href="/navigation">Route starten</Button>
</div>
