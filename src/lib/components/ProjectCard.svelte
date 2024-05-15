<script lang="ts">
  import { Card } from "flowbite-svelte";
  import { createEventDispatcher } from "svelte";
  export let project;
  const dispatch = createEventDispatcher();
  export let drawerOpen: boolean = false;
</script>

<Card
  class="m-2 bg-light"
  color="none"
  on:click={() => {
    console.log(drawerOpen);
    dispatch("click");
  }}
>
  <div class="flex">
    <div class="w-2/3">
      <h5
        class="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        {project.projectName}
      </h5>
      <div class="flex gap-4">
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 mr-1">
          {project.distance} away
        </p>
        <p class="text-gray-300">|</p>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {project.pathLength} long
        </p>
      </div>
    </div>
    <div class="w-1/3 pl-8">
      <img
        class="rounded-lg h-full object-cover"
        src={project.url}
        alt="Path thumbnail"
      />
    </div>
  </div>
</Card>
<!--Südstadt Nürnberg |
// entf. 800 m | länge 1 km -->
