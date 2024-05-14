<script>
    import { Button } from "flowbite-svelte";

    function goBack() {
        window.history.back();
    }
</script>

<Button color="alternative" pill on:click={goBack}>
    &larr;
</Button>
