import React from 'react';
import './App.css';
import ArrayState from './components/ArrayState';
import CleanEffect from './components/CleanEffect';
import DataFetch from './components/DataFetch';
import EffectHook from './components/EffectHook';
import EffectOnce from './components/EffectOnce';
import ObjState from './components/ObjState';
import ReducerHook from './components/ReducerHook';
import StateDependency from './components/StateDependency';
import StateHook from './components/StateHook';
import UseContextHook from './components/UseContextHook';

export const firstContext = React.createContext();
export const secondContext = React.createContext();
function App() {
  return (
    <div className="App">
      <ReducerHook/>
      <firstContext.Provider value={'First Context'}> 
        <secondContext.Provider value={'Second Context'}>
          <UseContextHook/>
        </secondContext.Provider> 
      </firstContext.Provider>
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
