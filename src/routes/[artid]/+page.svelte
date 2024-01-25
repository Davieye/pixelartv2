<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
    
    let color = '#000000'; // Default color


    
</script>

<nav>
    <a href="/">Home</a>
    
    
    
</nav>
<hr>
<h1>{data.art.name}</h1>
<hr>
<input type="color" id="colorPicker" bind:value={color}>

<!-- grid of all the pixels in data.Attr.pixels -->

<div class="center" ><div class="grid" style= "--width: {data.art.width}; --height: {data.art.height};">

    {#each data.art.pixels as pixel}
        <form action="?/update" method="post" use:enhance>
            <input type="hidden" name="pixelid" value="{pixel.id}">
            <input type="hidden" name="color" value="{color}">
            
            <button class="pixel" style="background-color: {pixel.color};"></button>
        </form>
    {/each}
    </div>
</div>
<hr>
<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(var(--width), 1fr);
        grid-template-rows: repeat(var(--height), 1fr);
        gap: 1px; /* Adjust this value to increase or decrease the gap */

        
        

        
    }
    .pixel {
        
        width: 20px;
        height: 20px;
        border: 1px solid black;
    }

    .center {
        display: flex;
        justify-content: center;

    }
    


</style>