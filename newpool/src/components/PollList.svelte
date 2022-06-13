<script>
// @ts-nocheck
    import PollDetails from "./PollDetails.svelte";
    import PollStore from "../stores/PollStore";
    import {fade,slide,scale} from 'svelte/transition'
    import {flip} from 'svelte/animate'

</script>

<div class="poll-list">
{#each $PollStore as poll (poll.id)}
         <div transition:slide animate:flip={{duration:500}}>
              <PollDetails {poll} />
        </div> 
{/each}
</div>

<style>
    .poll-list{
        display: flex;
    }
    div{
        margin: 20px;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-basis: 33%;
    }
</style>