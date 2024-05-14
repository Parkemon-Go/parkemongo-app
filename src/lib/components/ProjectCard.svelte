<script lang="ts">
    import {Card} from "flowbite-svelte";
    import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
    export let project; // wird injected
</script>


<Card class="m-2">
    <div class="flex ">
        <div class="w-2/3">
            <h5 class="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">{project.projectName}</h5>
            <div class="flex">
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 mr-1">{project.distance} | </p>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{project.pathLength}</p>
            </div>
        </div>
        <div class="w-1/3 pl-8 ">
            <img class="rounded-lg rounded w-16 h-16 object-cover"  src="/img/route.jpg" alt="Path thumbnail" />
        </div>

    </div>

</Card>
<!--Südstadt Nürnberg |
// entf. 800 m | länge 1 km -->
<!-- Project-karte anzeigen -->
