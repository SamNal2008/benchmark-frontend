import { Component, createEffect, createSignal } from 'solid-js';
import styles from './App.module.css';
import { ApiCalls } from './Components/ApiCalls';
import { Reactivity } from './Components/Reactivity';

export const [sharedState, setSharedState] = createSignal('');
export const [option, setOption] = createSignal('');

createEffect(() => {
  setSharedState(`${option()} !!`);
})

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1>Hello from Solid 👋 !</h1>
      <Reactivity/>
      <ApiCalls/>
    </div>
  );
};

export default App;
