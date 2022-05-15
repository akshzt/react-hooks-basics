import './App.css';

import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounterTwo';
import HookCounterThree from './components/useState/HookCounterThree';

function App() {
  return (
    <div className="App">
      <h2>React Hooks Basics</h2>
      <br />
      <br />
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
    </div>
  );
}

export default App;
