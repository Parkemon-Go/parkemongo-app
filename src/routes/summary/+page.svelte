<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { Confetti } from "svelte-confetti";
</script>

<div class="left-1/2 absolute z-10">
  <Confetti x={[-1, 1]} fallDistance="50vh" rounded></Confetti>
</div>
<div class="w-3/4 mx-auto flex flex-col h-full">
  <h1 class="text-xl underline mb-4 font-semibold">Südstadt Nürnberg</h1>
  <img
    class="rounded-xl shadow-lg border-2"
    alt="Strecke"
    src="/img/route.jpg"
  />
  <span>
    <Button size="md" color="alternative">Back to Profile</Button>
  </span>
</div>
