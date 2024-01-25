<!-- page for creating new pixelart -->

<!-- we are using sveltekit form actions and loading data from a sveltekit server -->

<script lang="ts">

    export let data;

</script>

<!-- add a list of pixelart which lists data.arts -->

<ol>
    {#each data.arts as art}
        <li>
            <a href="/{art.id}">{art.name}</a>
        </li>
    {/each}
</ol>

<!-- add a form for sending name width and height -->

<form action="?/create" method="post">

    <label for="name">Name</label>
    <input type="text" name="name" id="name" required>

    <label for="width">Width</label>
    <input type="number" name="width" id="width" required>

    <label for="height">Height</label>
    <input type="number" name="height" id="height" required>

    <button type="submit">Create</button>
</form>