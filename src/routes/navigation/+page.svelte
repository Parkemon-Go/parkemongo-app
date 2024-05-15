<script>
  import Camera from "$lib/components/Camera.svelte";
  import { Button } from "flowbite-svelte";
</script>

<div class="rounded-lg">
  <Camera></Camera>
  <img
    class="rounded-b-full w-full h-44"
    src="/img/route.jpg"
    alt="Route Bild"
  />
  <div class="flex justify-center my-4">
    <Button href="/summary">Route beenden</Button>
  </div>
</div>
