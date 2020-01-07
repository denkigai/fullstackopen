import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(randomInteger());
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleOnClickVotes = () => {
    const nextVotes = [...votes];
    nextVotes[selected] += 1;
    setVotes(nextVotes);
  };

  const maxVote = Math.max(...votes);
  const mostVoted = votes.findIndex(vote => vote === maxVote);
  return (
    <div>
      <h2>Anecdotes of the day</h2>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleOnClickVotes}>vote</button>
      <button onClick={() => setSelected(randomInteger())}>
        next anecdotes
      </button>
      <h2>Anecdotes with most votes</h2>
      <div> {anecdotes[mostVoted]}</div>
      <div>has {maxVote}</div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

const randomInteger = () => Math.floor(Math.random() * anecdotes.length);

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
