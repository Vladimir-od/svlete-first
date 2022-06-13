
<script>
// @ts-nocheck

	import  PollStore  from '/src/stores/PollStore';
    import Button from "../shared/Button.svelte";
    import {createEventDispatcher} from 'svelte'

    let dispatch = createEventDispatcher()
    let fields = { question:'',answerA:'',answerB:''}
    let errors = { question:'',answerA:'',answerB:''}
    let valid = false
     const submitHandler = ()=>{
     valid = true
     //validate question
     if(fields.question.trim().length<5){
         valid = false
         errors.question = 'Question must be at least 5 characters long'
     }else{
         errors.question = ''
     }
    //validate answer a
     if(fields.answerA.trim().length<1){
         valid = false
         errors.answerA = 'answerA  cannot be empty'
     }else{
         errors.answerA = ''
     }

    //validate answer b
    if(fields.answerB.trim().length<1){
         valid = false
         errors.answerB = 'answerB cannot be empty'
     }else{
         errors.answerB = ''
     }
     if(valid){
         let poll = {...fields,votesA:0,votesB:0,id:Math.random()}
         PollStore.update(currentPolls=>{
            return [poll,...currentPolls]
         })
        dispatch('add')
     }
    }
</script>




<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" name="question" id="question" bind:value={fields.question}>
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" name="question" id="answer-a" bind:value={fields.answerA}>
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" name="ques
        tion" id="answer-b" bind:value={fields.answerB}>
        <div class="error">{errors.answerB}</div>
    </div>
    <Button flat={true}>Add Poll</Button>
</form>




<style>
    form{
        max-width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    input{
        padding: 10px;
        width: 100%;
        border-radius: 6px;
    }
    .form-field {
        margin: 10px;
       
    }
  label{
      display: block;
      margin: 10px auto;
      text-align: left;
  }
.error{
    font-weight: bold;
    font-size: 16px;
    color: #d91b42;
}
</style>