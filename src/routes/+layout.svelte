<script lang="ts">
  import {
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
    Navbar,
  } from "flowbite-svelte";
  import "../app.css";
</script>

<div class="container max-w-7xl flex flex-col mx-auto items-center h-screen">
  <Navbar class="mb-4" let:hidden let:toggle>
    <NavBrand href="/">
      <img src="/img/logo.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >
        ParkémonGo
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/payment">Payment</NavLi>
      <NavLi href="/user">Profile</NavLi>
    </NavUl>
  </Navbar>
  <slot />
</div>
