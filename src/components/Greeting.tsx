// Child Component: Greeting.tsx
import React from "react";

interface GreetingProps {
  name: string;
  age: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <p>
        Hello, {name}! You are {age} years old.
      </p>
    </div>
  );
};

export default Greeting;
