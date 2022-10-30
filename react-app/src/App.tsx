import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello from React 👋 !</h1>
      <div>
        <p>Value of count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click to increase count</button>
      </div>
    </div>
  );
}

export default App;
