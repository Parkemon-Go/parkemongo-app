<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";
  import type {Project} from "../../app";
  import ProjectCardDrawer from "$lib/components/ProjectCardDrawer.svelte";

  const projects: Project[] = [
          {id:"1", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 1 km"},
          {id:"2", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 1 km"},
          {id:"3", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 1 km"},
          {id:"4", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 1 km"},
          {id:"5", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 1 km"},
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
  <ProjectCardDrawer on:click={() => drawerOpen = !drawerOpen}></ProjectCardDrawer>
{/if}
