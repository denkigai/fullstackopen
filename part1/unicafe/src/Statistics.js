import React from "react";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const all = good - bad;
  const voted = good + neutral + bad;
  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={all / 3} />
      <Statistic
        text="positive"
        value={`${voted === 0 ? 0 : (good * 100) / voted}%`}
      />
    </div>
  );
};

export default Statistics;
