import { useEffect, useState } from 'react';
import './App.css';
import { fakeApi } from './fake';

function App() {

  const [count, setCount] = useState(0);

  const [fakeData, setFakeData] = useState<string>('');
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = (errorWanted?: boolean) => {
    // Reset my error or loading case
    setError(undefined);
    setIsLoading(true);

    // Make my call and handle my different case
    fakeApi(errorWanted)
      .then((data) => {setFakeData(data)})
      .catch((err) => {setError(err)})
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello from React 👋 !</h1>
      <div>
        <h3>Reactivity</h3>
        <p>Value of count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click to increase count</button>
      </div>

      <div>
        <h3>Api calls</h3>
        <p>My data : {isLoading ? 'Loading ...' : error ?? fakeData }</p>
        <button onClick={() => fetchData()}>Refetch data</button>
        <button onClick={() => fetchData(true)}>Fetch with error</button>
      </div>
    </div>
  );
}

export default App;
