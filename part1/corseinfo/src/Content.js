import React from "react";
import { Part } from "./Part";
export const Content = props => (
  <>
    {props.parts.map(part => (
      <Part part={part.name} exercise={part.exercise} />
    ))}
  </>
);
