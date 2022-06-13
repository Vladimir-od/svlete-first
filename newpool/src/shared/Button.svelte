<script>
   export let type = 'primary'
   export let flat = false  
</script>

<button class={type} class:flat={flat} on:click>
    <slot><!-- optional fallback --></slot>
</button>

<style>
    button{
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 10px 16px;
        font-weight: bold;
        box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
    }
    .primary{
        background-color: olive;
        color: white;
    }
    .secondary{
        background-color: rgb(222, 6, 6);
        color: #fff;
    }
    .flat{
        box-shadow: none;
    }
</style>