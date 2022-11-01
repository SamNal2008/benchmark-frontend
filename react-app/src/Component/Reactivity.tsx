import { useState } from "react";

let index = 0;

export const Reactivity = () => {

  console.log(index++);

  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Reactivity</h3>
      <p>Value of count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click to increase count</button>
    </div>
  );
}