<script lang="ts">
  import {
    NavHamburger,
    NavLi,
    NavUl,
    Navbar,
  } from "flowbite-svelte";
  import "../app.css";
  import {isScrolled} from "$lib/handleScroll";

  "$lib/handleScroll.js";
</script>

<style>
    .navbar-wrapper {
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .navBrand{
        position: fixed;
        right: 25px;
        top: 20px;
        transition: right 0.3s ease-in-out;
    }
    .greeting-scrolled {
            right: 50%;
            transform: translate(50%);
    }
</style>

<div class="max-w-7xl mx-auto navbar-wrapper">
  <Navbar let:hidden let:toggle color="none">
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/payment">Payment</NavLi>
      <NavLi href="/user">Profile</NavLi>
    </NavUl>
    <div class="navBrand {$isScrolled ? 'greeting-scrolled' : ''}">
      Hallo @User
    </div>
  </Navbar>
</div>
<slot />

