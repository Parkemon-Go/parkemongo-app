<script lang="ts">
  import { NavHamburger, NavLi, NavUl, Navbar } from "flowbite-svelte";
  import "../app.css";
  import { isScrolled } from "$lib/handleScroll";

  ("$lib/handleScroll.js");
</script>

<div class="navbar-wrapper {$isScrolled ? 'nav-scrolled' : ''}">
  <Navbar let:hidden let:toggle color="none">
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/payment">Payment</NavLi>
      <NavLi href="/user">Profile</NavLi>
    </NavUl>
    <div class="navBrand {$isScrolled ? 'greeting-scrolled' : ''}">
      Hallo Nils!
    </div>
  </Navbar>
</div>
<slot />

<style>
  .navbar-wrapper {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .navBrand {
    position: fixed;
    right: 25px;
    top: 20px;
    transition: right 0.3s ease-in-out;
  }
  .greeting-scrolled {
    right: 50%;
    transform: translate(50%);
  }
  .nav-scrolled {
    background-color: #efebdc;
    transition: background-color 0.3s ease-in-out;
  }
</style>
