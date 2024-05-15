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
      distance: "4,9 km",
      pathLength: "3,3 km",
      url: "/img/route_nordstadt.jpg",
    },
    {
      id: "3",
      projectName: "Eibach Nürnberg",
      distance: "8 km",
      pathLength: "3,1 km",
      url: "/img/route_eibach.jpg",
    },
    {
      id: "4",
      projectName: "St. Johannes Nürnberg",
      distance: "1,5 km",
      pathLength: "1,1 km",
      url: "/img/route_johannes.jpg",
    },
    {
      id: "5",
      projectName: "Gostenhof Nürnberg",
      distance: "2,5 km",
      pathLength: "1,1 km",
      url: "/img/route_gostenhof.jpg",
    },
    {
      id: "6",
      projectName: "Schoppershof Nürnberg",
      distance: "3,5 km",
      pathLength: "1,2 km",
      url: "/img/route_schoppershof.jpg",
    },
    {
      id: "7",
      projectName: "Hummelstein Nürnberg",
      distance: "3,5 km",
      pathLength: "750 m",
      url: "/img/route_himpelshof.jpg",
    },
    {
      id: "8",
      projectName: "Gebitzenhof Nürnberg",
      distance: "3,5 km",
      pathLength: "500 m",
      url: "/img/route_gibitzenhof.jpg",
    },
    {
      id: "9",
      projectName: "Rosenau Nürnberg",
      distance: "3,5 km",
      pathLength: "1,5 km",
      url: "/img/route_rosenau.jpg",
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
