<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";
  import type {Project} from "../../app";
  import ProjectCardDrawer from "$lib/components/ProjectCardDrawer.svelte";

  const projects: Project[] = [
          {id:"1", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 2,6 km"},
          {id:"2", projectName:"Nordstadt Nürnberg", distance:"entf. 2 km", pathLength: "Länge 0,7 km"},
          {id:"3", projectName:"Eibach Nürnberg", distance:"entf. 8 km", pathLength: "Länge 2 km"},
          {id:"4", projectName:"St. Johannes Nürnberg", distance:"entf. 1,5 km", pathLength: "Länge 3 km"},
          {id:"5", projectName:"Gostenhof Nürnberg", distance:"entf. 2,5 km", pathLength: "Länge 4,5 km"},
          {id:"6", projectName:"Schoppershof Nürnberg", distance:"entf. 3,5 km", pathLength: "Länge 2,4 km"},
          {id:"7", projectName:"Hummelstein Nürnberg", distance:"entf. 3,5 km", pathLength: "Länge 2,4 km"},
          {id:"8", projectName:"Gebitzenhof Nürnberg", distance:"entf. 3,5 km", pathLength: "Länge 2,4 km"},
          {id:"9", projectName:"Rosenau Nürnberg", distance:"entf. 3,5 km", pathLength: "Länge 2,4 km"},
  ];

  let drawerOpen: boolean = false
</script>

{#each projects as project}
  {#if !drawerOpen}
  <ProjectCard {project} {drawerOpen} on:change={() => drawerOpen = !drawerOpen} />
    {/if}
{/each}

{#if drawerOpen}
  <!-- Project-karte anzeigen -->
  <ProjectCardDrawer on:change={() => drawerOpen = !drawerOpen}></ProjectCardDrawer>
{/if}
