<script lang="ts">
  import { sineIn } from "svelte/transition";
  import ProjectCard from "./ProjectCard.svelte";
  import type { Project } from "../../app";
  import ProjectCardDrawer from "$lib/components/ProjectCardDrawer.svelte";

  const projects: Project[] = [
    {
      id: "1",
      projectName: "Südstadt Nürnberg",
      distance: "entf. 800 m",
      pathLength: "Länge 2,6 km",
    },
    {
      id: "2",
      projectName: "Nordstadt Nürnberg",
      distance: "entf. 2 km",
      pathLength: "Länge 0,7 km",
    },
    {
      id: "3",
      projectName: "Eibach Nürnberg",
      distance: "entf. 8 km",
      pathLength: "Länge 2 km",
    },
    {
      id: "4",
      projectName: "St. Johannes Nürnberg",
      distance: "entf. 1,5 km",
      pathLength: "Länge 3 km",
    },
    {
      id: "5",
      projectName: "Gostenhof Nürnberg",
      distance: "entf. 2,5 km",
      pathLength: "Länge 4,5 km",
    },
    {
      id: "6",
      projectName: "Schoppershof Nürnberg",
      distance: "entf. 3,5 km",
      pathLength: "Länge 2,4 km",
    },
    {
      id: "7",
      projectName: "Hummelstein Nürnberg",
      distance: "entf. 3,5 km",
      pathLength: "Länge 2,4 km",
    },
    {
      id: "8",
      projectName: "Gebitzenhof Nürnberg",
      distance: "entf. 3,5 km",
      pathLength: "Länge 2,4 km",
    },
    {
      id: "9",
      projectName: "Rosenau Nürnberg",
      distance: "entf. 3,5 km",
      pathLength: "Länge 2,4 km",
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
