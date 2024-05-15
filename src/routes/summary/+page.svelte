<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { Confetti } from "svelte-confetti";
</script>

<div class="w-3/4 mx-auto flex flex-col h-full justify-center mt-20">
  <div class="left-1/2 absolute z-10">
    <Confetti x={[-1, 1]} fallDistance="50vh" rounded></Confetti>
  </div>
  <h1 class="text-xl underline mb-4 font-semibold">Südstadt Nürnberg</h1>
  <img
    class="rounded-xl shadow-lg border-2"
    alt="Strecke"
    src="/img/route.jpg"
  />
  <div class="grid grid-cols-3 my-8 gap-4">
    <div class="flex flex-col justify-center items-center">
      <p class="text-xl font-semibold">39</p>
      <p>min</p>
    </div>
    <div class="flex flex-col justify-center items-center">
      <p class="text-xl font-semibold">2,64</p>
      <p>km</p>
    </div>
    <div class="flex flex-col justify-center items-center">
      <p class="text-xl font-semibold">59</p>
      <p>kcal</p>
    </div>
    <div class="flex flex-col justify-center items-center col-span-3">
      <p class="text-2xl font-bold text-green-700">+2,64€</p>
      <p>Earnings</p>
    </div>
  </div>
  <Button class="mt-4" size="md" color="primary" href="/"
    >Back to Dashboard</Button
  >
</div>
