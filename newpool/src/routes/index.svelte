<script>
    // @ts-nocheck
	import PollList from './../components/PollList.svelte';
	import Tabs from './../shared/Tabs.svelte';
	import Footer from './../components/Footer.svelte';
    import Header from "../components/Header.svelte";
    import CreatePollForm from './../components/CreatePollForm.svelte';

    let items = ['Current Polls', 'Add new poll']
    let activeItem = 'Current Polls'


    const tabChange = (e)=>{
        activeItem = e.detail
    }
    const handleAdd = (e)=>{
    activeItem = 'Current Polls'
    }
console.log('test')

</script>



<Header></Header>

<main>
<Tabs {activeItem} {items} on:tabChange={tabChange}/>
{#if activeItem==='Current Polls'}
    <PollList  />
{:else if  activeItem==='Add new poll'}
    <CreatePollForm on:add={handleAdd}/>
{/if}
</main>


<Footer></Footer>



<style>
   
    main{
        max-width: 960px;
        margin: 0 auto;
    }
</style>