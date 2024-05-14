<script>
  import {isScrolled} from "$lib/handleScroll";
</script>

<style>
    .user-icon {
        width: 200px; /* Adjust as needed */
        height: 200px; /* Adjust as needed */
        border-radius: 100%;
        border: 2px solid gray; /* Add border style */
        overflow: hidden;
        object-fit: cover;
        transition: right 0.3s ease-in-out, top 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out;
        position: fixed;
        top: 70px;
        right: 50%;
        transform: translateX(50%); /* Center horizontally */
        z-index: 11;
    }

    .user-icon-scrolled {
        right: calc(25px);
        top: 0;
        width: 50px;
        height: 50px;
        margin-top:5px;
        margin-right:5px;
    }
</style>

<img class="user-icon { $isScrolled ? 'user-icon-scrolled' : ''}" src="Nils-Jugel_web.jpg" alt="User Icon" width="100%" height="100%">
