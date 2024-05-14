<!-- Dashboard -->
<script lang="ts">
  import Projects from "$lib/components/Projects.svelte";
  import Stats from "$lib/components/Stats.svelte";
  import { Hr } from "flowbite-svelte";
  import UserIcon from "$lib/components/UserIcon.svelte";
  import { onMount } from 'svelte';
  // your script goes here
  import { handleScroll } from "$lib/handleScroll.js";

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>


<UserIcon />
<div style="margin-top: 200px"></div>
<Stats />
<Hr>Aktuelle Projekte</Hr>
<Projects />
