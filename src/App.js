import './App.css';

import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounterTwo';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterFour from './components/useState/HookCounterFour';

import UEClassCounter from './components/useEffect/UEClassCounter';
import UEHookCounterOne from './components/useEffect/UEHookCounterOne';
import ClassMouse from './components/useEffect/ClassMouse';
import HookMouse from './components/useEffect/HookMouse';
import MouseContainer from './components/useEffect/MouseContainer';
import IntervalClassCounter from './components/useEffect/IntervalClassCounter';
import IntervalHookCounter from './components/useEffect/IntervalHookCounter';

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
      <HookCounterFour />

      {/* <UEClassCounter /> */}
      <UEHookCounterOne />
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      <MouseContainer />
      <IntervalClassCounter />
      <IntervalHookCounter />

    </div>
  );
}

export default App;
