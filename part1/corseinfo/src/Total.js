import React from "react";

export const Total = ({ exercises }) => (
  <p>Number of exercises {exercises.reduce((prev, curr) => prev + curr, 0)}</p>
);
