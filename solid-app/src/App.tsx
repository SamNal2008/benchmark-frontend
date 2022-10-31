import { Component, createEffect, createResource, createSignal, ErrorBoundary, Match, on, Show, Switch } from 'solid-js';
import styles from './App.module.css';
import { fakeApi } from './fake';

const [errorWanted, setErrorWanted] = createSignal(false);

const App: Component = () => {

  const [count, setCount] = createSignal(0);

  const [data, { refetch }] = createResource(() => fakeApi(errorWanted()));

  createEffect(() => console.log('Data : ' + data()));

  createEffect(() => console.log('Error : ' + data.error))

  createEffect(() => console.log('Loading : ' + data.loading));

  return (
    <div class={styles.App}>
      <h1>Hello from Solid 👋 !</h1>
      <div>
        <h3>Reactivity</h3>
        <p>Value of count: {count()}</p>
        <button onClick={() => setCount(count() + 1)}>Click to increase count</button>
      </div>

      <div>
        <h3>Api calls</h3>
        <p>My data : {data.loading ? 'Loading ...' : data.error ?? data() }</p>
        <button onClick={() => {setErrorWanted(false); refetch()}}>Refetch data</button>
        <button onClick={() => {setErrorWanted(true); refetch()}}>Fetch with error</button>
      </div>
    </div>
  );
};

export default App;
