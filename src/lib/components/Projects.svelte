<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";
  import type {Project} from "../../app";

  const projects: Project[] = [
          {id:"1", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 1 km"},
          {id:"2", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 1 km"},
          {id:"3", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 1 km"},
          {id:"4", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 1 km"},
          {id:"5", projectName:"Südstadt Nürnberg", distance:"entf. 800 m", pathLength: "Länge 1 km"},
  ];
</script>

{#each projects as project}
  <ProjectCard {project} />
{/each}
