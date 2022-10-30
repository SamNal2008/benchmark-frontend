import { Component, createSignal } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {

  const [count, setCount] = createSignal(0);

  return (
    <div class={styles.App}>
      <h1>Hello from Solid 👋 !</h1>
      <div>
        <p>Value of count: {count()}</p>
        <button onClick={() => setCount(count() + 1)}>Click to increase count</button>
      </div>
    </div>
  );
};

export default App;
