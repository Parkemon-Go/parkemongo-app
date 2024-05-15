<!-- Dashboard -->
<script lang="ts">
  import Projects from "$lib/components/Projects.svelte";
  import Stats from "$lib/components/Stats.svelte";
  import UserIcon from "$lib/components/UserIcon.svelte";
  import { onMount } from "svelte";
  // your script goes here
  import { handleScroll, isScrolled } from "$lib/handleScroll.js";

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div class="flex flex-col items-center">
  <div class={$isScrolled ? "" : "mb-48"}>
    <UserIcon />
  </div>
  <Stats />

  <Projects />
</div>
