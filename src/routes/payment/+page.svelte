<script lang="ts">
  import ProjectCardDrawer from "$lib/components/ProjectCardDrawer.svelte";
import { Button, Card } from "flowbite-svelte";

  const a = "Visa";
  const b = "Mastercard";

  let cards: any[] = [];

  function addCard() {
    cards = [...cards, "a"];
  }
</script>

<div class="grid sm:grid-cols-2 gap-8">
  {#each cards as item}
    <Card size="none"
      >{a} Karte {Math.random().toString(36).substring(2, 15)}</Card
    >
  {/each}
</div>
<ProjectCardDrawer></ProjectCardDrawer>
