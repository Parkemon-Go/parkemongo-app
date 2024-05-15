<script>
  import { Button, Drawer } from "flowbite-svelte";
  import { createEventDispatcher } from "svelte";
  import { sineIn } from "svelte/easing";

  let transitionParamsBottom = {
    y: 320,
    duration: 200,
    easing: sineIn,
  };
  export let drawerOpen = false;

  $: hidden = !drawerOpen;
</script>

<Drawer
  class="bg-light"
  placement="bottom"
  width="w-full"
  transitionType="fly"
  transitionParams={transitionParamsBottom}
  bind:hidden
  id="sidebar8"
>
  <div class="p-2">
    <h5
      class="underline mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Südstadt Nürnberg
    </h5>
    <img
      class="rounded-xl shadow-lg w-full"
      src="/img/route.jpg"
      alt="Route Bild"
    />
    <div class="grid gap-8 grid-cols-2 my-8">
      <div class="text-gray-500 flex flex-col justify-center items-center">
        <strong>Länge der Route</strong>
        <p>2,6 km</p>
      </div>
      <div class="text-gray-500 flex flex-col justify-center items-center">
        <strong>Dauer der Route</strong>
        <p>36 min</p>
      </div>
      <div class="text-gray-500 flex flex-col justify-center items-center">
        <strong>Type der Route</strong>
        <p>einfache Strecke</p>
      </div>
      <div class="text-gray-500 flex flex-col justify-center items-center">
        <strong>Punkte </strong>
        <p>4900</p>
      </div>
    </div>
  </div>
  <Button class="mb-5 w-full" href="/navigation">Route starten</Button>
</Drawer>
