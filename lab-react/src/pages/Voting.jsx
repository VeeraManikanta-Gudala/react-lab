import { useState } from "react";
import "./vote.css";
function Voting() {
const [votesA, setVotesA] = useState(0);
const [votesB, setVotesB] = useState(0);
function handleVoteA() {
setVotesA(votesA + 1);
}
function handleVoteB() {
setVotesB(votesB + 1);
}
return (
<div className="voting-app">
<h1>Voting Application</h1>
<div className="candidates">
<div className="candidate">
<h2>Candidate A</h2>
<p>Votes: {votesA}</p>
<button onClick={handleVoteA}>Vote for Candidate A</button>
</div>
<div className="candidate">
<h2>Candidate B</h2>
<p>Votes: {votesB}</p>
<button onClick={handleVoteB}>Vote for Candidate B</button>
</div>
</div>
</div>
);
}
export default Voting;