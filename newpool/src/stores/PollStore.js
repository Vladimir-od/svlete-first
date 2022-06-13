import { writable } from "svelte/store";
const PollStore = writable(
    [
        {
            id:1,
            question:"Cleyrop or something else?",
            answerA:'Cleyrop',
            answerB:'of course Cleyrop',
            votesA:10,
            votesB:15,
        },
    ]
)
export default PollStore
