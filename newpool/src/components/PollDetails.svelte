<script>
    // @ts-nocheck
	import Button from './../shared/Button.svelte';
    import Card from '../shared/Card.svelte'
    import PollStore from '/src/stores/PollStore';
    import {tweened} from 'svelte/motion'
    
    export let poll

    const tweenedA = tweened(0)
    const tweenedB = tweened(0)

  $: totalVotes = poll.votesA + poll.votesB
  $: percentA = Math.floor(100/totalVotes*poll.votesA) || 0
  $: percentB = Math.floor(100/totalVotes*poll.votesB) || 0
  $: tweenedA.set(percentA)
  $: tweenedB.set(percentB)
    const handleVote = (option,id)=>{
        PollStore.update((currentPolls)=>{
            let copiedPolls = [...currentPolls]
            let upvotedPoll = copiedPolls.find((poll)=>poll.id == id)
            if(option==='a'){
                upvotedPoll.votesA++
            }
            if(option==='b'){
                upvotedPoll.votesB++
            }
            return copiedPolls
        })
    }
            const handleDelete = (id)=>{
                PollStore.update(currentPolls=>{
                return currentPolls.filter(poll=>poll.id!=id)
            })
                }
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total votes: {totalVotes}</p>
        <div class="poll__answer" on:click={()=>{handleVote('a',poll.id)}}>
            <div class="answer-percent answer-percent-a" style="width:{$tweenedA}%"></div>
            <span>{poll.answerA}({poll.votesA})</span>
        </div>
        <div class="poll__answer" on:click={()=>{handleVote('b',poll.id)}}>
            <div class="answer-percent answer-percent-b" style="width:{$tweenedB}%"></div>
            <span>{poll.answerB}({poll.votesB})</span>
        </div>
        <div class="delete">
            <Button type='secondary' on:click={()=>{handleDelete(poll.id)}}>Delete</Button>
        </div>  
      </div>
</Card>




<style>
  .poll{
      display: flex;
      flex-direction: column;
      /* max-width: 50%; */
  }
   p{
       color:#aaa;
       font-size: 14px;
       margin: 6px 0 30px 0;;
   }
   .poll__answer{
       background-color: #fafafa;
       cursor: pointer;
       margin-bottom: 10px;
       position: relative;
   }
   .poll__answer:hover{
       opacity: 0.6;
   }
   span{
       display: inline-block;
       padding: 10px 20px;
   }
   .answer-percent{
       height: 100%;
       position: absolute;
       box-sizing: border-box;
       
   }
   .answer-percent-b{
       border-left: 4px solid rgba(222, 205, 13, 1);
       background-color: rgba(222, 205, 13, 0.6);
   }
   .answer-percent-a{
    border-left: 4px solid rgba(18, 121, 217, 1);
       background-color: rgba(18, 121, 217, 0.6);
   }
   .delete{
       margin-top: 25px;
       text-align: center;
   }
</style>