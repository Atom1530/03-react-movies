
import css from "./VoteOptions.module.css"
import type { VoteType } from "../../types/votes"

interface VotePropsType {
  onVote: (type:VoteType)=> void;
  onReset: () => void;
  canReset: boolean;
}

function VoteOptions({onVote,onReset,canReset}: VotePropsType) {
  function voteGood() { onVote("good");};
  function voteNeutral() { onVote("neutral"); };  
  function voteBad() { onVote("bad"); }
  
  return (
<div className={css.container}>
  <button className={css.button} onClick={voteGood}>Good</button>
  <button className={css.button} onClick={voteNeutral}>Neutral</button>
  <button className={css.button} onClick={voteBad}>Bad</button>
  {canReset &&
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
  }
</div>

  );
}

export default VoteOptions