import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import VoteOptions from "../VoteOptions/VoteOptions";
import { useState } from "react";
import type { Votes, VoteType } from "../../types/votes";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

const DefaultNumbers: Votes = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [votes, setVotes] = useState<Votes>(DefaultNumbers);

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetVotes = (): void => {
    setVotes(DefaultNumbers);
  };
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
