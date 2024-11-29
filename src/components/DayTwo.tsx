import React from "react";
import Greeting from "./Greeting";
export default function DayTwo() {
  return (
    <>
      <div>
        <h1>Welcome to React!</h1>
        <Greeting name="Sean" age={25} />
        <Greeting name="Thompson" age={30} />
      </div>
    </>
  );
}
