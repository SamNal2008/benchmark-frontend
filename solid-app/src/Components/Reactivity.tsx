import { createSignal } from "solid-js";
import { option, setOption } from "../App";

let index = 0;

export const Reactivity = (props: any) => {
  
  console.log(index++);

  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h3>Reactivity</h3>
      <p>Value of count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Click to increase count</button>
      <p>{option()}</p>
      <input onKeyUp={(e: any) => setOption(e.target.value)}/>
    </div>
  );
}