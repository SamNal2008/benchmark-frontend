import { ApiCall } from './Component/ApiCall';
import './App.css';
import { Reactivity } from './Component/Reactivity';

function App() {

  return (
    <div className="App">
      <h1>Hello from React 👋 !</h1>
      <Reactivity/>
      <ApiCall/>
    </div>
  );
}

export default App;
