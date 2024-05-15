<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";
  import type { Project } from "../../app";
  import ProjectCardDrawer from "$lib/components/ProjectCardDrawer.svelte";
  import { sineIn } from "svelte/easing";

  const projects: Project[] = [
    {
      id: "1",
      projectName: "Südstadt Nürnberg",
      distance: "800 m",
      pathLength: "2,6 km",
      url: "/img/route.jpg",
    },
    {
      id: "2",
      projectName: "Nordstadt Nürnberg",
      distance: "2 km",
      pathLength: "0,7 km",
      url: "/img/route.jpg",
    },
    {
      id: "3",
      projectName: "Eibach Nürnberg",
      distance: "8 km",
      pathLength: "2 km",
      url: "/img/route.jpg",
    },
    {
      id: "4",
      projectName: "St. Johannes Nürnberg",
      distance: "1,5 km",
      pathLength: "3 km",
      url: "/img/route.jpg",
    },
    {
      id: "5",
      projectName: "Gostenhof Nürnberg",
      distance: "2,5 km",
      pathLength: "4,5 km",
      url: "/img/route.jpg",
    },
    {
      id: "6",
      projectName: "Schoppershof Nürnberg",
      distance: "3,5 km",
      pathLength: "2,4 km",
      url: "/img/route.jpg",
    },
    {
      id: "7",
      projectName: "Hummelstein Nürnberg",
      distance: "3,5 km",
      pathLength: "2,4 km",
      url: "/img/route.jpg",
    },
    {
      id: "8",
      projectName: "Gebitzenhof Nürnberg",
      distance: "3,5 km",
      pathLength: "2,4 km",
      url: "/img/route.jpg",
    },
    {
      id: "9",
      projectName: "Rosenau Nürnberg",
      distance: "3,5 km",
      pathLength: "2,4 km",
      url: "/img/route.jpg",
    },
  ];

  let drawerOpen: boolean = false;

  let transitionParams = {
    y: 520,
    duration: 300,
    easing: sineIn,
  };
</script>

{#each projects as project}
  <ProjectCard
    {project}
    {drawerOpen}
    on:click={() => (drawerOpen = !drawerOpen)}
  />
{/each}

<!-- Project-karte anzeigen -->
<ProjectCardDrawer bind:drawerOpen></ProjectCardDrawer>
