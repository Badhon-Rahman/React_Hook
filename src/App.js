import './App.css';
import ArrayState from './components/ArrayState';
import CleanEffect from './components/CleanEffect';
import DataFetch from './components/DataFetch';
import EffectHook from './components/EffectHook';
import EffectOnce from './components/EffectOnce';
import ObjState from './components/ObjState';
import StateDependency from './components/StateDependency';
import StateHook from './components/StateHook';

function App() {
  return (
    <div className="App">
      <DataFetch/>
      <StateDependency/>
      <CleanEffect/>
      {/* <EffectOnce/> */}
      <EffectHook/>
      <ArrayState />
      <ObjState />
      <StateHook />
    </div>
  );
}

export default App;
