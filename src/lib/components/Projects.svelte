<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";
  const projects: any[] = [];
</script>

{#each projects as project}
  <ProjectCard {project} />
{/each}
